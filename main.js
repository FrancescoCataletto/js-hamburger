const hambMenu = document.querySelector(".hamburger-menu");

const hambMenuBars = document.querySelector(".fa-bars");

hambMenuBars.addEventListener('click', function(){
    hambMenu.classList.add("active");
});

const hambMenuX = document.querySelector(".fa-times");

hambMenuX.addEventListener('click', function(){
    hambMenu.classList.remove("active");
})