const typingElement = document.getElementById("typing");

const words = [
    "Java Developer",
    "DSA Enthusiast",
    "Full Stack Developer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex--);
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex++);
    }

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex > currentWord.length) {
        isDeleting = true;
        speed = 1500;
    } else if (isDeleting && charIndex < 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        charIndex = 0;
        speed = 300;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();