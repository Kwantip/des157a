(function() {
    const textBox = document.getElementById("textBox");
    const actionBox = document.getElementById("actionBox");
    const attack = document.getElementById("attack");
    const draw = document.getElementById("draw");
    const back = document.getElementById("back");
    const roll = document.getElementById("roll");
    const discard = document.getElementById("discard");
    const end = document.getElementById("end");
    const cards = document.getElementById("cards");
    const message = document.getElementById("message");
    const card1 = document.getElementById("card1");
    const card2 = document.getElementById("card2");
    const card3 = document.getElementById("card3");
    const card4 = document.getElementById("card4");
    const card5 = document.getElementById("card5");

    let deck = ["scratch", "scratch", "scratch", "scratch", "scratch", "kick", "kick", "kick", "kick", "kick", "bite", "bite", "bite", "swipe", "swipe", "swipe", "swipe", "swipe", "attack buff", "attack buff", "attack buff", "attack debuff", "attack debuff", "attack debuff", "defense buff", "defense buff", "defense buff", "defense debuff", "defense debuff", "defense debuff"];
    let hand = [];    
    let action = 2;
    let text = `Select an action. You have ${action} actions remaining.`;
    let increment = 0;
    let discarding = false;
    let modifierList = [{name: "bleed", turn: 99}];

    console.log(modifierList);

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
    document.querySelector("#back").addEventListener("click", function() {
        // Change the action box
        attack.style.display = "block";
        draw.style.display = "block";
        back.style.display = "none";

        // Change the text box
        cards.style.display = "none";
        changeMessage(`Select an action. You have ${action} actions remaining.`);

        checkTurn();
    });
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
        showHand(); // !!! TEMP DELETE LATER
        botsTurn();
    });

    card1.addEventListener("click", function() {
        console.log(hand[0]);
        if (!discarding) {
            playCard(hand[0]);
        } else {
            cards.style.display = "none";
            discardCard(hand[0]);
        }

        // Discard card from hand
        hand.splice(0, 1);

        checkTurn();
        console.log(hand);
    });

    console.log(hand)

    function botsTurn() {
        // Hide the action box
        end.style.display = "none";

        // Change the text box
        changeMessage("Bot's turn");
    }
    function checkTurn() {
        if (action == 0) {
            // If the hand is too big
            if (hand.length > 4) {
                // Change the action box
                attack.style.display = "none";
                draw.style.display = "none";
                discard.style.display = "block";

                // Change the text box
                changeMessage("No more actions remaining. You have too many cards!");
                discarding = true;
            } else {
                changeMessage("No more actions remaining.");
                discard.style.display = "none";
                end.style.display = "block";
            }

        }
    }
    function rollDice() {
        return Math.floor(Math.random() * 11) + 2;
    }
    function playCard(cardType) {
        let dice;

        // Change the action box
        back.style.display = "none";
        roll.style.display = "block";

        // Change the text box
        cards.style.display = "none";
        if (cardType == "attack buff" || cardType == "defense buff") {
            changeMessage(`You picked ${cardType}. Roll for the buff value!`);
        } else if (cardType == "attack debuff" || cardType == "defense debuff") {
            changeMessage(`You picked ${cardType}. Roll for the debuff value!`);
        } else{
            changeMessage(`You picked ${cardType}. Roll the dice for the damage!`);
        }

        // Roll the dice
        roll.addEventListener("click", function() {
            dice = rollDice();
            console.log(dice);

            switch(cardType) {
                case "scratch":
                    if (dice <= 4) {
                        console.log("failed");
                        changeMessage(`You rolled a ${dice}. Attack failed!`);
                    } else if (dice > 4 && dice <= 9) {
                        console.log("success");
                        changeMessage(`You rolled a ${dice}. Attack succeeded!`);
                    } else {
                        console.log("crit");
                        changeMessage(`You rolled a ${dice}. Attack crit!`);
                    }
                    // deck.push("scratch");
                    break;
                case "kick":
                    if (dice <= 6) {
                        console.log("failed");
                    } else if (dice > 6 && dice <= 10) {
                        console.log("success");
                    } else {
                        console.log("crit");
                    }
                    // deck.push("kick");
                    break;
                case "bite":
                    if (dice <= 3) {
                        console.log("failed");
                    } else if (dice > 3 && dice <= 6) {
                        console.log("no bleed");
                    } else if (dice > 6 && dice <= 9) {
                        console.log("success");
                    } else {
                        console.log("crit");
                    }
                    // deck.push("bite");
                    break;
                case "swipe":
                    if (dice <= 9) {
                        console.log("success");
                    } else {
                        console.log("crit");
                    }
                    // deck.push("swipe");
                    break;
                case "attack buff":
                    if (dice <= 5) {
                        console.log("+2 to your attack");
                    } else if (dice > 5 && dice <= 9) {
                        console.log("+3 to your attack");
                    } else {
                        console.log("+5 to your attack");
                    }
                    // deck.push("attack buff");
                    break;
                case "attack debuff":
                    if (dice <= 5) {
                        console.log("-1 to enemy's attack");
                    } else if (dice > 5 && dice <= 9) {
                        console.log("-2 to enemy's attack");
                    } else {
                        console.log("-3 to enemy's attack");
                    }
                    // deck.push("attack debuff");
                    break;
                case "defense buff":
                    if (dice <= 5) {
                        console.log("+1 to your defense");
                    } else if (dice > 5 && dice <= 9) {
                        console.log("+2 to your defense");
                    } else {
                        console.log("+3 to your defense");
                    }
                    // deck.push("defense buff");
                    break;
                case "defense debuff":
                    if (dice <= 5) {
                        console.log("-1 to enemy's defense");
                    } else if (dice > 5 && dice <= 9) {
                        console.log("-3 to enemy's defense");
                    } else {
                        console.log("-4 to enemy's defense");
                    }
                    // deck.push("defense debuff");
                    break;
            }
            // Decrease the action count
            action--;
            // Add the played card back into the deck
            discardCard(cardType);
        });        
    }
    function discardCard(cardType) {
        deck.push(cardType);
        console.log(deck);
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