const mobileBars = document.querySelector('.mobile-bars');
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('nav');

let isOpen = false;

mobileBars.addEventListener("click", () => {
    if (!isOpen) {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-x");
        nav.classList.add("active");
        isOpen = true;
    } else {
        menuIcon.classList.remove('fa-x');
        menuIcon.classList.add("fa-bars");
        nav.classList.remove("active");
        isOpen = false;
    }
})