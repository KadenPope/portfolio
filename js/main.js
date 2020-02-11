const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));


        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}

function starGenerator(el, starNumber) {
    for(let j = 0; j < (5 - starNumber); j++) {
        el.innerHTML += `<span class="fa fa-star unchecked"></span>`;
    }
    for(let i = 0; i < starNumber; i++) {
        el.innerHTML += `<span class="fa fa-star checked"></span>`;
    }
};

let elementsFive = document.querySelectorAll('.abilities__skills--five-stars');

elementsFive.forEach(function(current) {
    starGenerator(current, 5);
});

let elementsFour = document.querySelectorAll('.abilities__skills--four-stars');

elementsFour.forEach(function(current) {
    starGenerator(current, 4);
});

let elementsThree = document.querySelectorAll('.abilities__skills--three-stars');

elementsThree.forEach(function(current) {
    starGenerator(current, 3);
});

let elementsTwo = document.querySelectorAll('.abilities__skills--two-stars');

elementsTwo.forEach(function(current) {
    starGenerator(current, 2);
});