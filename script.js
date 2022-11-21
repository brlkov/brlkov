document.querySelector('#menu').addEventListener('click', () => {
    document.querySelector('.dropdown').style.display = "flex"
    document.querySelector('#about').style.display = "block"
    document.querySelector('#projects').style.display = "block"
    document.querySelector('#resume').style.display = "block"
    document.querySelector('#p').style.display = "block"
    document.querySelector('.about-me').style.display = "none"
    document.querySelector('.about-me-more').style.display = "none"
    document.querySelector('.projects').style.display = "none"
    document.querySelector('.resume').style.display = "none"
});

document.querySelector('#brlkov').addEventListener('click', () => {
    document.querySelector('.about-me').style.display = "block"
    document.querySelector('.about-me-more').style.display = "none"
    document.querySelector('.projects').style.display = "none"
    document.querySelector('.resume').style.display = "none"
    document.querySelector('.dropdown').style.display = "none"
    document.querySelector('#p').style.display = "none"
});

document.querySelector('#about').addEventListener('click', () => {
    document.querySelector('.about-me-more').style.display = "block"
    document.querySelector('.about-me').style.display = "none"
    document.querySelector('.projects').style.display = "none"
    document.querySelector('.resume').style.display = "none"
    document.querySelector('#projects').style.display = "none"
    document.querySelector('#resume').style.display = "none"
});

document.querySelector('#projects').addEventListener('click', () => {
    document.querySelector('.about-me').style.display = "none"
    document.querySelector('.about-me-more').style.display = "none"
    document.querySelector('.resume').style.display = "none"
    document.querySelector('.projects').style.display = "flex"
    document.querySelector('#about').style.display = "none"
    document.querySelector('#resume').style.display = "none"
});

document.querySelector('#resume').addEventListener('click', () => {
    document.querySelector('.about-me').style.display = "none"
    document.querySelector('.about-me-more').style.display = "none"
    document.querySelector('.projects').style.display = "none"
    document.querySelector('.resume').style.display = "block"
    document.querySelector('#about').style.display = "none"
    document.querySelector('#projects').style.display = "none"
});




let counter = 2;

document.getElementById("next").addEventListener("click", () =>
{
    if(counter === 1) {
        document.getElementById("pr1").style.display = "block";
        document.getElementById("pr2").style.display = "none";
        document.getElementById("pr3").style.display = "none";
        document.getElementById("pr4").style.display = "none";
        document.getElementById("pr5").style.display = "none";
        counter = 2;
    }
    else if(counter === 2) {
        document.getElementById("pr1").style.display = "none";
        document.getElementById("pr2").style.display = "block";
        document.getElementById("pr3").style.display = "none";
        document.getElementById("pr4").style.display = "none";
        document.getElementById("pr5").style.display = "none";
        counter = 3;
    }
    else if(counter === 3) {
        document.getElementById("pr1").style.display = "none";
        document.getElementById("pr2").style.display = "none";
        document.getElementById("pr3").style.display = "block";
        document.getElementById("pr4").style.display = "none";
        document.getElementById("pr5").style.display = "none";
        counter = 4;
    }
    else if(counter === 4) {
        document.getElementById("pr1").style.display = "none";
        document.getElementById("pr2").style.display = "none";
        document.getElementById("pr3").style.display = "none";
        document.getElementById("pr4").style.display = "block";
        document.getElementById("pr5").style.display = "none";
        counter = 5;
    }
    else if(counter === 5) {
        document.getElementById("pr1").style.display = "none";
        document.getElementById("pr2").style.display = "none";
        document.getElementById("pr3").style.display = "none";
        document.getElementById("pr4").style.display = "none";
        document.getElementById("pr5").style.display = "block";
        counter = 1;
    }
});
