const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

// Display Toggle Menu 
const toggleMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click',toggleMenu); 


