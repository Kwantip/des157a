(function() {
    const textBox = document.getElementById("textBox");
    const actionBox = document.getElementById("actionBox");

    let deck = ["scratch", "scratch", "scratch", "scratch", "scratch", "kick", "kick", "kick", "kick", "kick", "bite", "bite", "bite", "swipe", "swipe", "swipe", "swipe", "swipe", "attack buff", "attack buff", "attack buff", "attack debuff", "attack debuff", "attack debuff", "defense buff", "defense buff", "defense buff", "defense debuff", "defense debuff", "defense debuff"];
    let hand = [];    

    // Draw initial hand
    for (let i = 0; i < 3; i++) {
        let rand = Math.floor(Math.random() * (deck.length-1));
        hand.push(deck[rand]);
        deck.splice(rand, 1);
        textBox.innerHTML += `<p class="card" id="card${i+1}">${deck[rand]}</p>`;
    }
    // Draw card
    document.querySelector("#draw").addEventListener("click", function() {
        let rand = Math.floor(Math.random() * (deck.length-1));
        hand.push(deck[rand]);
        deck.splice(rand, 1);
        textBox.innerHTML += `<p class="card" id="card${hand.length+1}">${deck[rand]}</p>`;
    });

    document.querySelector("#card1").addEventListener("click", function() {
        playCard(hand[0]);

        // Discard card from hand
        hand.splice(0, 1);
    });
    console.log(hand)

    function rollDice() {
        return Math.floor(Math.random() * 11) + 2;
    }
    function playCard(cardType) {
        const dice = rollDice();
        console.log(dice);
        textBox.innerHTML = `<p>You rolled a <strong>${dice}</strong>!</p>`;
        switch(cardType) {
            case "scratch":
                if (dice <= 4) {
                    console.log("failed");
                } else if (dice > 4 && dice <= 9) {
                    console.log("success");
                } else {
                    console.log("crit");
                }
                deck.push("scratch");
                break;
            case "kick":
                if (dice <= 6) {
                    console.log("failed");
                } else if (dice > 6 && dice <= 10) {
                    console.log("success");
                } else {
                    console.log("crit");
                }
                deck.push("kick");
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
                deck.push("bite");
                break;
            case "swipe":
                if (dice <= 9) {
                    console.log("success");
                } else {
                    console.log("crit");
                }
                deck.push("swipe");
                break;
            case "attack buff":
                if (dice <= 5) {
                    console.log("+2 to your attack");
                } else if (dice > 5 && dice <= 9) {
                    console.log("+3 to your attack");
                } else {
                    console.log("+5 to your attack");
                }
                deck.push("attack buff");
                break;
            case "attack debuff":
                if (dice <= 5) {
                    console.log("-1 to enemy's attack");
                } else if (dice > 5 && dice <= 9) {
                    console.log("-2 to enemy's attack");
                } else {
                    console.log("-3 to enemy's attack");
                }
                deck.push("attack debuff");
                break;
            case "defense buff":
                if (dice <= 5) {
                    console.log("+1 to your defense");
                } else if (dice > 5 && dice <= 9) {
                    console.log("+2 to your defense");
                } else {
                    console.log("+3 to your defense");
                }
                deck.push("defense buff");
                break;
            case "defense debuff":
                if (dice <= 5) {
                    console.log("-1 to enemy's defense");
                } else if (dice > 5 && dice <= 9) {
                    console.log("-3 to enemy's defense");
                } else {
                    console.log("-4 to enemy's defense");
                }
                deck.push("defense debuff");
                break;
        }
    }
})();