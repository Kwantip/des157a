"using strict"
console.log("reading JS");

(function() {
    const submitBtn = document.querySelector("#submitBtn");
    const form = document.querySelector("form");
    const para = document.querySelector("#paragraph");
    const words = document.querySelectorAll("input[type=text]");
    const min = document.querySelector("input[type=number]");
    const pronoun1 = document.querySelector("select");

    submitBtn.addEventListener("click", function(event) {
        event.preventDefault();

        let pronoun2, pronoun3;

        switch (pronoun1.value) {
            case "he":
                pronoun2 = "He";
                pronoun3 = "his";
                break;
            case "she":
                pronoun2 = "She";
                pronoun3 = "her";
                break;
            case "they":
                pronoun2 = "They";
                pronoun3 = "their";
                break;
        }

        document.querySelector("h1").innerHTML = `${words[0].value}'s Busy Day`;
        form.style.display = "none";

        para.innerHTML = `${words[0].value} is a cat. Despite being a cat, ${words[0].value}’s days are very busy. Everyday at 6AM, ${pronoun1.value} wakes up, does a big stretch, and takes a sip of ${words[1].value}. ${pronoun2} then walks to ${pronoun3} food bowl and start ${words[2].value} for ${pronoun3} breakfast. At 10AM ${pronoun1.value} put on ${pronoun3} chef hat and starts making ${words[3].value}. ${pronoun2}'ve been behind on orders so today ${pronoun1.value}'s working extra hard. After making ${words[3].value} for hours, ${words[0].value} is now tired. ${pronoun2} let out a big ${words[4].value} and curls up on ${pronoun3} bed to take a nap. ${pronoun2} then spends the entire afternoon napping until ${pronoun1.value} feels ${pronoun3} stomach rumbling. ${pronoun2} abruptly wakes up, and notices that ${pronoun3} food bowl is empty. ${pronoun2} looks over at the clock and it’s already ${min.value} minutes past ${pronoun3} feeding time! ${words[0].value} starts meowing and pacing around ${pronoun3} room in protest. After a bit, ${pronoun3} owner opened a can of ${words[5].value} and put it in ${pronoun3} bowl. ${pronoun2} wishes they were ${words[6].value} instead, but ${words[5].value} will do. After dinner, ${pronoun1.value} starts chasing around ${words[7].value} before ${pronoun3} night shift of keeping ${pronoun3} home safe from bugs. By 11PM ${pronoun1.value} starts to feel tired again. ${pronoun2} climb up on to ${pronoun3} bed, starts licking himself/herself before curling up to sleep.`;
        para.style.display = "block";
    });
})();