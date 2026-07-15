const roles = [
    "Java Developer",
    "Full Stack Developer",
    "DSA Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function type() {

    if (charIndex < roles[roleIndex].length) {

        typing.innerHTML += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(type, 120);

    } else {

        setTimeout(erase, 1200);

    }

}

function erase() {

    if (charIndex > 0) {

        typing.innerHTML = roles[roleIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(erase, 60);

    } else {

        roleIndex++;

        if (roleIndex >= roles.length) {

            roleIndex = 0;

        }

        setTimeout(type, 300);

    }

}

type();