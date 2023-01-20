const menuButton = document.getElementsByClassName('menu-button')[0]
const navButtons = document.getElementsByClassName('nav-buttons')[0]

menuButton.addEventListener('click', () => {
    navButtons.classList.toggle('active')
} )