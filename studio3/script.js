(function() {
    const dingSound = new Audio("sounds/ding-101377.mp3"); // From https://pixabay.com/sound-effects/ding-101377/

    const playerHPVal = document.getElementById("playerHPVal");
    const enemyHPVal = document.getElementById("enemyHPVal");
    const playerHPBar = document.getElementById("playerHPBar");
    const textBox = document.getElementById("textBox");
    const actionBox = document.getElementById("actionBox");
    const actions = document.querySelectorAll(".actions");
    const attack = document.getElementById("attack");
    const draw = document.getElementById("draw");
    const back = document.getElementById("back");
    const roll = document.getElementById("roll");
    const cont = document.getElementById("continue");
    const discard = document.getElementById("discard");
    const end = document.getElementById("end");
    const cards = document.getElementById("cards");
    const message = document.getElementById("message");
    const card1 = document.getElementById("card1");
    const card2 = document.getElementById("card2");
    const card3 = document.getElementById("card3");
    const card4 = document.getElementById("card4");
    const card5 = document.getElementById("card5");

    let deck = ["scratch", "scratch", "scratch", "scratch", "scratch", "kick", "kick", "kick", "kick", "kick", "bite", "bite", "bite", "swipe", "swipe", "swipe", "swipe", "swipe", "attack buff", "attack buff", "attack buff", "attack debuff", "attack debuff", "attack debuff", "defense buff", "defense buff", "defense buff", "defense debuff", "defense debuff", "defense debuff", "heal", "heal", "heal", "heal", "heal"];
    let hand = [];
    let playedCard;
    let action = 2;
    let text = `Select an action. You have ${action} actions remaining.`;
    let increment = 0;
    let discarding = false;

    const bleedMod = {name: "bleed", turn: 99};
    const atkBuffMod = {name: "attack buff", value: 0,turn: 3};

    let hp = 50;
    let atk = 0;
    let bleed = 0;
    let atkBuff = 0;
    let defBuff = 0;

    let enemyHP = 100;
    let atkDebuff = 0;
    let defDebuff = 0;
    
    // Sounds
    // dingSound.muted = true;
    for (let i = 0; i < actions.length; i++) {
        actions[i].addEventListener("mouseover", function(){
            dingSound.play();
            // console.log(this);
            this.style.textDecoration = "underline";
        });
        actions[i].addEventListener("mouseout", function() {
            // dingSound.muted = true;
            this.style.textDecoration = "none";
        });
    }
    // console.log(actions);

    // Initial message
    typeWriter();

    // Draw initial hand
    for (let i = 0; i < 3; i++) {
        let rand = Math.floor(Math.random() * (deck.length-1));
        hand.push(deck[rand]);
        deck.splice(rand, 1);
    }

    // 
    if (action == 0) {
        console.log("reee")
        if (hand.length > 3) {
            changeMessage(`I'm so tired bruh`);
            discard.style.display = "block";
        }
    } else {
        // playerTurn();
    }

    // Attack
    attack.addEventListener("click", function() {
        // Change the action box
        attack.style.display = "none";
        draw.style.display = "none";
        back.style.display = "block";
        
        // Change the text box
        showHand();
    });
    // Back button
    back.addEventListener("click", checkTurn);
    // Draw card
    draw.addEventListener("click", function() {
        // Draw a card and add to the hand
        let rand = Math.floor(Math.random() * (deck.length-1));
        hand.push(deck[rand]);
        changeMessage(`You drew a ${deck[rand]}!`);
        // Take the drawn card out of the deck
        deck.splice(rand, 1);

        // Change the action box
        attack.style.display = "none";
        draw.style.display = "none";
        back.style.display = "block";

        // Decrement the action count
        action--;
        // console.log(deck);
    });
    // Roll the dice
    roll.addEventListener("click", function() {
        const dice = rollDice();
        console.log(dice);

        switch(playedCard) {
            case "scratch":
                if (dice <= 4) {
                    console.log("failed");
                    changeMessage(`You rolled a ${dice}. Attack failed!`);
                } else if (dice > 4 && dice <= 9) {
                    console.log("success");
                    changeMessage(`You rolled a ${dice}. Attack succeeded!`);
                    atk = 3 + atkBuff + bleed + defDebuff;
                } else {
                    console.log("crit");
                    changeMessage(`You rolled a ${dice}. Attack crit!`);
                    atk = 5 + atkBuff + bleed + defDebuff;
                }
                break;
            case "kick":
                if (dice <= 6) {
                    console.log("failed");
                    changeMessage(`You rolled a ${dice}. Attack failed!`);
                } else if (dice > 6 && dice <= 10) {
                    console.log("success");
                    changeMessage(`You rolled a ${dice}. Attack succeeded!`);
                    atk = 6 + atkBuff + bleed + defDebuff;
                } else {
                    console.log("crit");
                    changeMessage(`You rolled a ${dice}. Attack crit!`);
                    atk = 8 + atkBuff + bleed + defDebuff;
                }
                break;
            case "bite":
                if (dice <= 3) {
                    console.log("failed");
                    changeMessage(`You rolled a ${dice}. Attack failed!`);
                } else if (dice > 3 && dice <= 6) {
                    console.log("no bleed");
                    changeMessage(`You rolled a ${dice}. Attack succeeded, but bleed failed!`);
                    atk = 2 + atkBuff + bleed + defDebuff;
                } else if (dice > 6 && dice <= 9) {
                    console.log("success");
                    changeMessage(`You rolled a ${dice}. Attack succeeded, apply bleed to enemy!`);
                    bleed += 1;
                    atk = 2 + atkBuff + bleed + defDebuff;
                } else {
                    console.log("crit");
                    changeMessage(`You rolled a ${dice}. Attack crit!`);
                    bleed += 1;
                    atk = 5 + atkBuff + bleed + defDebuff;
                }
                break;
            case "swipe":
                if (dice <= 9) {
                    console.log("success");
                    changeMessage(`You rolled a ${dice}. Attack succeeded!`);
                    atk = 2 + atkBuff + bleed + defDebuff;
                } else {
                    console.log("crit");
                    changeMessage(`You rolled a ${dice}. Attack crit!`);
                    atk = 6 + atkBuff + bleed + defDebuff;
                }
                break;
            case "attack buff":
                if (dice <= 5) {
                    console.log("+2 to your attack");
                    changeMessage(`You rolled a ${dice}. +2 to your attacks!`);
                    atkBuff += 2;
                } else if (dice > 5 && dice <= 9) {
                    console.log("+3 to your attack");
                    changeMessage(`You rolled a ${dice}. +3 to your attacks!`);
                    atkBuff += 3;
                } else {
                    console.log("+5 to your attack");
                    changeMessage(`You rolled a ${dice}. +5 to your attacks!`);
                    atkBuff += 5;
                }
                break;
            case "attack debuff":
                if (dice <= 5) {
                    console.log("-1 to enemy's attack");
                    changeMessage(`You rolled a ${dice}. -1 to the enemy's attacks!`);
                    atkDebuff += 1;
                } else if (dice > 5 && dice <= 9) {
                    console.log("-2 to enemy's attack");
                    changeMessage(`You rolled a ${dice}. -2 to the enemy's attacks!`);
                    atkDebuff += 2;
                } else {
                    console.log("-3 to enemy's attack");
                    changeMessage(`You rolled a ${dice}. -3 to the enemy's attacks!`);
                    atkDebuff += 3;
                }
                break;
            case "defense buff":
                if (dice <= 5) {
                    console.log("+1 to your defense");
                    changeMessage(`You rolled a ${dice}. +1 to your defense!`);
                    defBuff += 1;
                } else if (dice > 5 && dice <= 9) {
                    console.log("+2 to your defense");
                    changeMessage(`You rolled a ${dice}. +2 to your defense!`);
                    defBuff += 2;
                } else {
                    console.log("+3 to your defense");
                    changeMessage(`You rolled a ${dice}. +3 to your defense!`);
                    defBuff += 3;
                }
                break;
            case "defense debuff":
                if (dice <= 5) {
                    console.log("-1 to enemy's defense");
                    changeMessage(`You rolled a ${dice}. -1 to the enemy's defense!`);
                    defDebuff += 1;
                } else if (dice > 5 && dice <= 9) {
                    console.log("-3 to enemy's defense");
                    changeMessage(`You rolled a ${dice}. -3 to the enemy's defense!`);
                    defDebuff += 3;
                } else {
                    console.log("-4 to enemy's defense");
                    changeMessage(`You rolled a ${dice}. -4 to the enemy's defense!`);
                    defDebuff += 4;
                }
                break;
            case "heal":
                if (dice <= 5) {
                    console.log("1 to your health");
                    if (hp == 50) {
                        changeMessage(`You rolled a ${dice}. +0 to your health!`);
                    } else {
                        changeMessage(`You rolled a ${dice}. +1 to your health!`);
                        hp += 1;
                    }
                } else if (dice > 5 && dice <= 9) {
                    console.log("3 to your health");
                    if (hp >= 47) {
                        changeMessage(`You rolled a ${dice}. +${50-hp} to your health!`);
                        hp = 50;
                    } else {
                        changeMessage(`You rolled a ${dice}. +3 to your health!`);
                        hp += 3;
                    }
                } else {
                    console.log("5 to your health");
                    if (hp >= 45) {
                        changeMessage(`You rolled a ${dice}. +${50-hp} to your health!`);
                        hp = 50;
                    } else {
                        changeMessage(`You rolled a ${dice}. +5 to your health!`);
                        hp += 5;
                    }
                }
                break;
            default:
                console.log("error!");``
        }
        // Deal damage to enemy
        enemyHP -= atk;
        atk = 0;
        enemyHPVal.innerHTML = `<p>${enemyHP}</p>`
        // Decrement the action count
        action--;
        // Change the action box
        roll.style.display = "none";
        // if (action == 0) {
        //     end.style.display = "block";
        // } else {
            // end.style.display = "none";
            cont.style.display = "block";
        // }
        // Add the played card back into the deck
        discardCard(playedCard);
    });
    // Continue
    cont.addEventListener("click", checkTurn);
    // Discard card
    discard.addEventListener("click", function() {
        // Change the action box
        attack.style.display = "none";
        draw.style.display = "none";
        back.style.display = "none";
        
        // Change the text box
        showHand();
    });
    // End turn
    end.addEventListener("click", function() {
        console.log("KMS");
        // showHand(); // !!! TEMP DELETE LATER
        botsTurn();
    });

    card1.addEventListener("click", function() {
        console.log(hand[0]);
        if (!discarding) {
            playCard(hand[0]);
        } else {
            cards.style.display = "none";
            discardCard(hand[0]);
            discarding = false;
            checkTurn();
        }

        // Discard card from hand
        hand.splice(0, 1);        
    });
    card2.addEventListener("click", function() {
        console.log(hand[1]);
        if (!discarding) {
            playCard(hand[1]);
        } else {
            cards.style.display = "none";
            discardCard(hand[1]);
            discarding = false;
            checkTurn();
        }

        // Discard card from hand
        hand.splice(1, 1);
    });
    card3.addEventListener("click", function() {
        console.log(hand[2]);
        if (!discarding) {
            playCard(hand[2]);
        } else {
            cards.style.display = "none";
            discardCard(hand[2]);
            discarding = false;
            checkTurn();
        }

        // Discard card from hand
        hand.splice(2, 1);        
    });
    card4.addEventListener("click", function() {
        console.log(hand[3]);
        if (!discarding) {
            playCard(hand[3]);
        } else {
            cards.style.display = "none";
            discardCard(hand[3]);
            discarding = false;
            checkTurn();
        }

        // Discard card from hand
        hand.splice(3, 1);
    });
    card5.addEventListener("click", function() {
        console.log(hand[4]);
        if (!discarding) {
            playCard(hand[4]);
        } else {
            cards.style.display = "none";
            discardCard(hand[4]);
            discarding = false;
            checkTurn();
        }

        // Discard card from hand
        hand.splice(4, 1);
    });

    console.log(hand)

    function playersTurn() {
        // action = 2;
        changeMessage()
    }
    function botsTurn() {
        let dice = rollDice() - defBuff - atkDebuff;

        // Hide the action box
        end.style.display = "none";

        // Change the text box
        changeMessage("Bot's turn");
        setTimeout(changeMessage, 3000, `Bot attacked for ${dice} damage!`);
        hp -= dice;
        dice = rollDice() - defBuff - atkDebuff;
        setTimeout(changeMessage, 6000, `Bot attacked for ${dice} damage!`);
        hp -= dice;
        setTimeout(changeMessage, 9000, `Player's turn`);

        // End of bot's turn
        // Reset player's action
        action = 2;
        setTimeout(checkTurn, 12000);
    }
    function checkTurn() {
        playerHPVal.innerHTML = `<p>${hp}</p>`
        playerHPBar.style.width = `${(hp/50) * 320}px`;

        // Change the action box
        cont.style.display = "none";
        roll.style.display = "none";
        back.style.display = "none";
        if (action == 0) {
            // Change the action box
            attack.style.display = "none";
            draw.style.display = "none";

            // If the hand is too big
            if (hand.length > 4) {
                // Change the action box
                discard.style.display = "block";

                // Change the text box
                changeMessage("No more actions remaining. You have too many cards!");
                discarding = true;
            } else {
                changeMessage("No more actions remaining.");
                discard.style.display = "none";
                end.style.display = "block";
            }
        } else if (hp <= 0) {
            changeMessage("L + RATIOED (you died)");
        } else if (enemyHP <= 0) {
            changeMessage("YOU WIN!");
        } else {
            // Change the action box
            attack.style.display = "block";
            draw.style.display = "block";

            // Change the text box
            changeMessage(`Select an action. You have ${action} actions remaining.`);
        }
    }
    function rollDice() {
        // Generate a random number from 2 to 12 to simulate a 2 die roll
        return Math.floor(Math.random() * 11) + 2;
    }
    // Changes the message based on the card picked
    function playCard(cardType) {
        // Change the action box
        back.style.display = "none";
        roll.style.display = "block";

        // Change the text box
        cards.style.display = "none";
        if (cardType == "attack buff" || cardType == "defense buff") {
            changeMessage(`You picked ${cardType}. Roll for the buff value!`);
        } else if (cardType == "attack debuff" || cardType == "defense debuff") {
            changeMessage(`You picked ${cardType}. Roll for the debuff value!`);
        } else if (cardType == "heal") {
            changeMessage(`You picked ${cardType}. Roll the dice for the value!`);
        } else {
            changeMessage(`You picked ${cardType}. Roll the dice for the damage!`);
        }
        playedCard = cardType;
    }
    function discardCard(cardType) {
        deck.push(cardType);
        // console.log(deck);
    }
    function showHand() {
        message.style.display = "none";
        cards.style.display = "flex";
        // const temp = "attack buff"
        for (let i = 0; i < Math.max(hand.length, 5); i++) {
            if (hand[i]) {
                document.getElementById(`card${i+1}`).style.display = "flex";
                document.getElementById(`card${i+1}`).innerHTML = `<strong>${hand[i]}</strong>`;
                document.getElementById(`card${i+1}`).style.backgroundImage = `url(images/${hand[i].replace(" ", "")}.jpg)`;
            } else {
                document.getElementById(`card${i+1}`).style.display = "none";
                document.getElementById(`card${i+1}`).innerHTML = `<strong>card${i+1}</strong>`;
            }
        }
    }
    function changeMessage(msg) {
        increment = 0;
        text = msg;
        message.innerHTML = "";
        typeWriter();
    }
    /* !! - Code from W3 School - !! */
    function typeWriter() {
        message.style.display = "block";
        if (increment < text.length) {
            message.innerHTML += text.charAt(increment);
            increment++;
            setTimeout(typeWriter, 50);
        }
    }
})();