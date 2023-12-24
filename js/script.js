window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.navigation-menu'),
        menuItem = document.querySelectorAll('.navigation-item'),
        hamburger = document.querySelector('.navigation-burger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('navigation-burger-active');
        menu.classList.toggle('navigation-menu-active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('navigation-burger-active');
            menu.classList.toggle('navigation-menu-active');
        })
    })
})