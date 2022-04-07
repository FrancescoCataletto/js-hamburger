const hambMenu = document.querySelector(".hamburger-menu");

const hambMenuBars = document.querySelector(".fa-bars");

hambMenuBars.addEventListener('click', function(){
    hambMenu.classList.add("active");
});