const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menuBtn");

const showHideMenu = () => {
    menuBtn.firstElementChild.classList.toggle("bx-menu-alt-left"); 
    menuBtn.firstElementChild.classList.toggle("bx-x"); 

    menu.classList.toggle("scale-x-0");
};

menuBtn.addEventListener("click", showHideMenu);
