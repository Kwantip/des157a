(function() {
    "use strict";
    console.log("reading JS");
    console.log()

    let cat, imgOverlayOpened, fileOverlayOpened;
    // document.querySelector("h1").innerHTML = `${window.innerWidth}, ${window.innerHeight}`;

    const currentImg = document.querySelector("#current");
    const leftImg = document.querySelector("#left");
    const rightImg = document.querySelector("#right");
    const leftBtn = document.querySelector("#leftArrow");
    const rightBtn = document.querySelector("#rightArrow");
    const imgOverlay = document.querySelector("#imgOverlay");
    const fileOverlay = document.querySelector("#fileOverlay");
    const fileContent = document.querySelectorAll("#file p");
    const preview = document.querySelector("#preview");

    // MAIN PAGE
    document.getElementById("cream").addEventListener("click", function() {
        cat = "cream";
        fileOverlay.style.display = "flex";

        fileContent[0].innerHTML = "<p><strong>Name: </strong>Cream Cat</p>";
        fileContent[1].innerHTML = "<p><strong>Age: </strong>Unknown</p>";
        fileContent[2].innerHTML = "<p><strong>DOB: </strong>Unknown</p>";
        fileContent[3].innerHTML = "<p><strong>Sex: </strong>Male</p>";
        fileContent[4].innerHTML = "<p><strong>Colors: </strong>Flame Point</p>";
        fileContent[5].innerHTML = "<p><strong>Eyes: </strong>Blue</p>";
        fileContent[6].innerHTML = "<p><strong>Toes: </strong>Pink</p>";
        fileContent[7].innerHTML = "<p><strong>Breed: </strong>DSH</p>";
        fileContent[8].innerHTML = "<p>Cream Cat is a cat that lives in my parent’s backyard. He’s a flame point siamese cat with beautiful blue eyes. He’s extremely sweet and loves pets, but gets overstimulated very easily.</p>";

        preview.src = "images/cream1.jpg";

        fileOverlayOpened = true;
    });
    document.getElementById("eevee").addEventListener("click", function() {
        cat = "eevee";
        fileOverlay.style.display = "flex";

        fileContent[0].innerHTML = "<p><strong>Name: </strong>Eevee</p>";
        fileContent[1].innerHTML = "<p><strong>Age: </strong>4</p>";
        fileContent[2].innerHTML = "<p><strong>DOB: </strong>6/5/2019</p>";
        fileContent[3].innerHTML = "<p><strong>Sex: </strong>Male</p>";
        fileContent[4].innerHTML = "<p><strong>Colors: </strong>Brown Tabby</p>";
        fileContent[5].innerHTML = "<p><strong>Eyes: </strong>Yellow-Green</p>";
        fileContent[6].innerHTML = "<p><strong>Toes: </strong>Black</p>";
        fileContent[7].innerHTML = "<p><strong>Breed: </strong>DSH</p>";
        fileContent[8].innerHTML = "<p>Eevee is one of my best friend’s cat. He’s the biggest cat I’ve ever seen (and the longest too.) His meows are the cutest and he’s a very soft boy. One of my favorite moments with him was this one time when my friend was away and I was taking care of him. I went into his room and was wondering where he was. I decided to just open his food can in hopes that he’ll show up. When I popped the can open, I saw a lump on the bed started moving. HE TUCKED HIMSELF IN FOR A NAP. ISN’T THAT LIKE THE CUTEST THING. BRO I’M IN TEARS. I love him a ton and miss him a lot.</p>";

        preview.src = "images/eevee1.jpg";

        fileOverlayOpened = true;
    });
    document.getElementById("evie").addEventListener("click", function() {
        cat = "evie";
        fileOverlay.style.display = "flex";

        fileContent[0].innerHTML = "<p><strong>Name: </strong>Evie</p>";
        fileContent[1].innerHTML = "<p><strong>Age: </strong>2</p>";
        fileContent[2].innerHTML = "<p><strong>DOB: </strong>3/20/2021</p>";
        fileContent[3].innerHTML = "<p><strong>Sex: </strong>Female</p>";
        fileContent[4].innerHTML = "<p><strong>Colors: </strong>Calico Tabby</p>";
        fileContent[5].innerHTML = "<p><strong>Eyes: </strong>Green</p>";
        fileContent[6].innerHTML = "<p><strong>Toes: </strong>Mixed</p>";
        fileContent[7].innerHTML = "<p><strong>Breed: </strong>DSH</p>";
        fileContent[8].innerHTML = "<p>Evie is one of my baby girls. Initially I was going to adopt one cat, Nori, but when I went to see her, there were two other cats that were in the same foster home. One of those cats was Evie. The first time I saw her she climbed on my lap to sniff me and my belongings. At first I thought she was just an affectionate cat, but I later found out that she was just curious about me. One of her many nicknames is Evil Cat (like it’s literally so similar to her given name.) It’s because she looks cute and innocent, but this girl is evil. She’s always scheming about how to steal more treats. She’s a very smart girl and was able to pick up on tricks (like paw, other paw, spin, etc.) extremely fast (compared to her sister lol.) She doesn’t like being touched much and will make it known to you. But when she wants affection, you MUST provide it to her. I love her to death and will honestly die for her.</p>";

        preview.src = "images/evie2.jpg";

        fileOverlayOpened = true;
    });
    document.getElementById("kobe").addEventListener("click", function() {
        cat = "kobe";
        fileOverlay.style.display = "flex";

        fileContent[0].innerHTML = "<p><strong>Name: </strong>Kobe</p>";
        fileContent[1].innerHTML = "<p><strong>Age: </strong>2</p>";
        fileContent[2].innerHTML = "<p><strong>DOB: </strong>7/17/2021</p>";
        fileContent[3].innerHTML = "<p><strong>Sex: </strong>Male</p>";
        fileContent[4].innerHTML = "<p><strong>Colors: </strong>Gray Tabby</p>";
        fileContent[5].innerHTML = "<p><strong>Eyes: </strong>Green</p>";
        fileContent[6].innerHTML = "<p><strong>Toes: </strong>Pink</p>";
        fileContent[7].innerHTML = "<p><strong>Breed: </strong>DSH</p>";
        fileContent[8].innerHTML = "<p>Kobe is my friend’s other cat. He’s Eevee’s little brother. I remember the first time I met him, he fit in my palm and now he’s such a big boy. He’s a fearless cat and is a huge troublemaker, but honestly that’s his charm. This one time my housemates and I got In-n-Out and we left it on the dining room table while we were playing some board games. When we came to get our food, there were bite marks on the burger. This cat will knock over and dig through trashcans to get food. Some of the things he broke into includes, but not limited to, a bag of Ruffle chips, mooncake, and donuts. His meows are also very adorable. I miss him so much.</p>";

        preview.src = "images/kobe3.jpg";

        fileOverlayOpened = true;
    });
    document.getElementById("nori").addEventListener("click", function() {
        cat = "nori";
        fileOverlay.style.display = "flex";

        fileContent[0].innerHTML = "<p><strong>Name: </strong>Nori</p>";
        fileContent[1].innerHTML = "<p><strong>Age: </strong>2</p>";
        fileContent[2].innerHTML = "<p><strong>DOB: </strong>2/26/2021</p>";
        fileContent[3].innerHTML = "<p><strong>Sex: </strong>Female</p>";
        fileContent[4].innerHTML = "<p><strong>Colors: </strong>Tortoise Shell</p>";
        fileContent[5].innerHTML = "<p><strong>Eyes: </strong>Green</p>";
        fileContent[6].innerHTML = "<p><strong>Toes: </strong>Mixed</p>";
        fileContent[7].innerHTML = "<p><strong>Breed: </strong>DSH</p>";
        fileContent[8].innerHTML = "<p>Nori is my other, more affectionate baby girl. She was the only cat I was initially going to adopt, but I ended up adopting Evie as well. She’s a huge yapper because she meows A LOT. She’s a very chatty cat. She even talks in her sleep! Like mentioned earlier, she’s definitely more affectionate than Evie because she loves to cuddle more and would sit on my lap even when it’s not the most comfortable for her. She needs a lot more attention too and she will yell until you give it to her. Her favorite toy is a rainbow ribbon where she will also yell until you play with her. Every single night, she would cuddle up by my foot and fall asleep. Sometimes she takes up half of the bed though which is a bit annoying, but she’s my baby girl so it’s ok. She loves chin scritches and would purr so loud. I love her so much that I will kill and die for her.</p>";

        preview.src = "images/nori3.jpg";

        fileOverlayOpened = true;
    });
    document.getElementById("poobies").addEventListener("click", function() {
        cat = "poobies";
        fileOverlay.style.display = "flex";

        fileContent[0].innerHTML = "<p><strong>Name: </strong>Poobies</p>";
        fileContent[1].innerHTML = "<p><strong>Age: </strong>3-4</p>";
        fileContent[2].innerHTML = "<p><strong>DOB: </strong>Unknown</p>";
        fileContent[3].innerHTML = "<p><strong>Sex: </strong>Male</p>";
        fileContent[4].innerHTML = "<p><strong>Colors: </strong>Gray Tabby</p>";
        fileContent[5].innerHTML = "<p><strong>Eyes: </strong>Green</p>";
        fileContent[6].innerHTML = "<p><strong>Toes: </strong>Pink</p>";
        fileContent[7].innerHTML = "<p><strong>Breed: </strong>DSH</p>";
        fileContent[8].innerHTML = "<p>Oh boy, where do I begin with this cat. He’s such a cat, I don’t know how to explain it. Like he’s so expressive and is just so iconic. Just looking at him can make me laugh. He’s such a cat. He was an outdoor cat that lived in my parent’s backyard, until he came back one day with an injured and infected leg. After that, he’ve been kept indoor, but obviously he tried to escape many times. His head is huge. The vet even told my sisters that if they see any kittens with giant head running around in the street, it’s probably his children. Like don’t get me wrong, Eevee also have a big head, but like his body is also long so he’s proportional. Poobies on the other hand have a big ass head, but his body is so stubby and short. He just looks goofy. I love this cat to death though. He’s like a little brother honestly.</p>";

        preview.src = "images/poobies2.jpg";

        fileOverlayOpened = true;
    });


    // FILE OVERLAY
    // Expand image
    preview.addEventListener("click", openImg);

    // Keyboard controls
    window.addEventListener("keydown", function(event) {
        if (fileOverlayOpened && event.key == "Escape") {
            fileOverlayOpened = false;
            fileOverlay.style.display = "none";
        }
    });
    // Close overlay
    document.getElementById("closeFile").addEventListener("click", function() {
        fileOverlay.style.display = "none";
        fileOverlayOpened = false;
    });


    // IMAGE OVERLAY
    // Set up initial images
    let current = 0;
    let left = 2;
    let right = 1;
    let img;

    // Right button
    rightBtn.addEventListener("click", function() {
        goRight();
    });
    // Left button
    leftBtn.addEventListener("click", function() {
        goLeft();
    });
    // Close overlay
    document.getElementById("closeImg").addEventListener("click", function() {
        imgOverlay.style.display = "none";
        imgOverlayOpened = false;
    });
    // Keyboard controls
    window.addEventListener("keydown", function(event) {
        if (imgOverlayOpened) {
            switch (event.key) {
                case "ArrowRight":
                    goRight();
                    break;
                case "ArrowLeft":
                    goLeft();
                    break;
                case "Escape":
                    imgOverlay.style.display = "none";
                    imgOverlayOpened = false;
                    fileOverlay.style.display = "flex";
                    fileOverlayOpened = true;
                    break;
            }
        }
    });

    function openImg() {
        imgOverlay.style.display = "flex";
        imgOverlayOpened = true;

        img = [`${cat}1.jpg`, `${cat}2.jpg`, `${cat}3.jpg`];

        currentImg.src = `images/${img[current]}`;
        leftImg.src = `images/${img[left]}`;
        rightImg.src = `images/${img[right]}`;
    }
    function goRight() {
        if (current == 0) {
            current = img.length-1;
        } else {
            current--;
        }
        if (right == 0) {
            right = img.length-1;
        } else {
            right--;
        }
        if (left == 0) {
            left = img.length-1;
        } else {
            left--;
        }

        // Update the images
        currentImg.src = `images/${img[current]}`;
        leftImg.src = `images/${img[left]}`;
        rightImg.src = `images/${img[right]}`;
    }
    function goLeft() {
        if (current == img.length-1) {
            current = 0;
        } else {
            current++;
        }
        if (right == img.length-1) {
            right = 0;
        } else {
            right++;
        }
        if (left == img.length-1) {
            left = 0;
        } else {
            left++;
        }

        // Update the images
        currentImg.src = `images/${img[current]}`;
        leftImg.src = `images/${img[left]}`;
        rightImg.src = `images/${img[right]}`;
    }
})();