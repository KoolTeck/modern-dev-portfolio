const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn_burger');

menuBtn.addEventListener('click', toggleMenu);
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav_item'); 

function toggleMenu() {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
    menuNav.classList.toggle('open');
    navItems.forEach(item => item.classList.toggle('open'));
}

window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    preloader.classList.toggle('hide-preloader'); 
})

