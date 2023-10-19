// let menu = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menu.onclick = () => {
//     menu.classList.toggle('bx-x');
//     navbar.classList.toggle('open');
// };
let menuBurger = document.querySelector(".menu-burger");
let closeMenu = document.querySelector(".close-menu");
let navMenu = document.querySelector(".navigation");
const openNavMenu = ()=>{
    navMenu.style.transform = 'translateX(0)';
};
const closeNavMenu = ()=>{
    navMenu.style.transform = 'translateX(100%)';
};
menuBurger.addEventListener('click', openNavMenu);
closeMenu.addEventListener('click', closeNavMenu);