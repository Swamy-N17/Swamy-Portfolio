/* ================= MOBILE MENU ================= */

// Get the menu button and navigation list
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

// Open and close the mobile menu
menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("show");

});


// Close the menu after clicking a navigation link
const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");

    });

});


/* ================= TYPING ANIMATION ================= */

// Text that will appear one after another
const typingWords = [
    "Aspiring Java Developer",
    "Java Full Stack Developer",
    "Backend Development"
];

const typingText = document.getElementById("typingText");

let wordNumber = 0;
let letterNumber = 0;
let deleting = false;


// Typing function
function typeText() {

    const currentWord = typingWords[wordNumber];

    // Add letters
    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, letterNumber + 1);

        letterNumber++;

        // Start deleting after the complete word is shown
        if (letterNumber === currentWord.length) {

            deleting = true;

            setTimeout(typeText, 1500);

            return;
        }

    }

    // Remove letters
    else {

        typingText.textContent =
            currentWord.substring(0, letterNumber - 1);

        letterNumber--;

        // Move to the next word
        if (letterNumber === 0) {

            deleting = false;

            wordNumber++;

            if (wordNumber === typingWords.length) {
                wordNumber = 0;
            }

        }

    }

    // Typing speed
    const speed = deleting ? 50 : 90;

    setTimeout(typeText, speed);
}


// Start typing animation
typeText();

/* ================= SCROLL ANIMATION START ================= */

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

sections.forEach(function(section) {
    observer.observe(section);
});

/* ================= SCROLL ANIMATION END ================= */