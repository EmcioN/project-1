const menuButton = document.getElementsByClassName('menu-button')[0]
const navbarButtons = document.getElementsByClassName('nav-buttons')[0]

menuButton.addEventListener('click', () => {
    navbarButtons.classList.toggle(active)
} )