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

window.addEventListener('scroll', () => {
    const navHeight = nav.getBoundingClientRect().height;
    const scrollHeight = window.pageYOffset;
    const menuLinks = document.querySelectorAll('.menu-nav_link'); 
    if (scrollHeight > navHeight ) {
        menuNav.style.background = "#fff";
        menuLinks.forEach(link => link.style.color = "#2e2e2e");
    } else {
        menuNav.style.background = "transparent";
        menuLinks.forEach(link => link.style.color = "#fff");
    }
});

