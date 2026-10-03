/* ==================================================
   ELEMENTS
================================================== */
/* =========================
   BACKGROUND MUSIC
========================= */

const backgroundMusic =
    document.getElementById("backgroundMusic");

/* =========================
   MAIN SCREENS
========================= */

const welcomeScreen =
    document.getElementById("welcomeScreen");

const secondScreen =
    document.getElementById("secondScreen");

const envelopeScreen =
    document.getElementById("envelopeScreen");

const letterScreen =
    document.getElementById("letterScreen");

const storyIntroScreen =
    document.getElementById("storyIntroScreen");

const ourStoryScreen =
    document.getElementById("ourStoryScreen");

const loveCardsScreen =
    document.getElementById("loveCardsScreen");

const futureScreen =
    document.getElementById("futureScreen");

const finalScreen =
    document.getElementById("finalScreen");


/* =========================
   BUTTONS
========================= */

const startButton =
    document.getElementById("startButton");

const continueButton =
    document.getElementById("continueButton");

const readLetterButton =
    document.getElementById("readLetterButton");

const memoriesButton =
    document.getElementById("memoriesButton");

const storyButton =
    document.getElementById("storyButton");

const loveButton =
    document.getElementById("loveButton");

const futureButton =
    document.getElementById("futureButton");

const finalRevealButton =
    document.getElementById("finalRevealButton");


/* =========================
   ENVELOPE
========================= */

const envelope =
    document.getElementById("envelope");

const envelopeInstruction =
    document.getElementById("envelopeInstruction");

const openText =
    document.getElementById("openText");


/* ==================================================
   FIRST SCREEN
================================================== */

startButton.addEventListener("click", function () {

    /* =========================
       START BACKGROUND MUSIC
    ========================= */

    backgroundMusic.volume = 0;

    backgroundMusic.play()
        .then(function () {

            /* Fade music in gently */

            let volume = 0;

            const fadeIn =
                setInterval(function () {

                    if (volume < 0.22) {

                        volume += 0.01;

                        backgroundMusic.volume =
                            Math.min(volume, 0.22);

                    } else {

                        clearInterval(fadeIn);

                    }

                }, 100);

        })
        .catch(function (error) {

            console.log(
                "Music could not start:",
                error
            );

        });


    /* =========================
       MOVE TO SECOND SCREEN
    ========================= */

    welcomeScreen.style.opacity = "0";

    setTimeout(function () {

        welcomeScreen.style.display = "none";

        secondScreen.classList.remove("hidden");

    }, 1000);

});


/* ==================================================
   SECOND SCREEN
================================================== */

continueButton.addEventListener("click", function () {

    secondScreen.style.opacity = "0";

    setTimeout(function () {

        secondScreen.style.display = "none";

        envelopeScreen.classList.remove("hidden");

    }, 1000);

});


/* ==================================================
   ENVELOPE
================================================== */

envelope.addEventListener("click", function () {

    envelope.classList.toggle("open");

    envelopeInstruction.textContent =
        "Okay... now there's something waiting for you inside. ❤️";

    openText.textContent =
        "You opened it...";

    readLetterButton.classList.remove("hidden");

});


/* ==================================================
   READ LETTER
================================================== */

readLetterButton.addEventListener("click", function () {

    envelopeScreen.style.opacity = "0";

    setTimeout(function () {

        envelopeScreen.style.display = "none";

        letterScreen.classList.remove("hidden");

    }, 1000);

});


/* ==================================================
   LETTER → STORY INTRO
================================================== */

memoriesButton.addEventListener("click", function () {

    letterScreen.style.opacity = "0";

    setTimeout(function () {

        letterScreen.style.display = "none";

        storyIntroScreen.classList.remove("hidden");

    }, 1000);

});


/* ==================================================
   STORY INTRO → OUR STORY
================================================== */

storyButton.addEventListener("click", function () {

    storyIntroScreen.style.opacity = "0";

    setTimeout(function () {

        storyIntroScreen.style.display = "none";

        ourStoryScreen.classList.remove("hidden");

    }, 1000);

});


/* ==================================================
   MEMORY SCROLL ANIMATION
================================================== */

const memoryItems =
    document.querySelectorAll(".memory-reveal");


const memoryObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    memoryObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.2
        }

    );


memoryItems.forEach(function (item) {

    memoryObserver.observe(item);

});


/* ==================================================
   OUR STORY → LOVE CARDS
================================================== */

loveButton.addEventListener("click", function () {

    ourStoryScreen.style.opacity = "0";

    setTimeout(function () {

        ourStoryScreen.style.display = "none";

        loveCardsScreen.classList.remove("hidden");

    }, 1000);

});


/* ==================================================
   LOVE CARD FLIP
================================================== */

const loveCards =
    document.querySelectorAll(".love-card");


loveCards.forEach(function (card) {

    card.addEventListener("click", function () {

        card.classList.toggle("flipped");

    });

});


/* ==================================================
   LOVE CARDS → FUTURE
================================================== */

futureButton.addEventListener("click", function () {

    loveCardsScreen.style.opacity = "0";

    setTimeout(function () {

        loveCardsScreen.style.display = "none";

        futureScreen.classList.remove("hidden");

        futureScreen.style.opacity = "1";

    }, 1000);

});


/* ==================================================
   FUTURE CARD FLIP
================================================== */

const futureCards =
    document.querySelectorAll(".future-card");


futureCards.forEach(function (card) {

    card.addEventListener("click", function () {

        card.classList.toggle("flipped");

    });

});


/* ==================================================
   FUTURE → FINAL CONSTELLATION
================================================== */

finalRevealButton.addEventListener("click", function () {

    futureScreen.style.opacity = "0";

    setTimeout(function () {

        futureScreen.style.display = "none";

        finalScreen.classList.remove("hidden");

        finalScreen.style.opacity = "1";

        /*
           Restart constellation animations
           whenever the final screen opens.
        */

        const stars =
            document.querySelectorAll(".star");

        stars.forEach(function (star) {

            star.style.animation = "none";

            void star.offsetWidth;

            star.style.animation = "";

        });

    }, 1000);

});