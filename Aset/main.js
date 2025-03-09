let menuOpen = document.querySelector('.tombol');
let menuWrap = document.querySelector('.menu');
let kotak = document.querySelector(".kotaknama");
let kotakdesk = document.querySelector(".kotakdesk");
let kotakavatar = document.querySelector(".kotakavatar");

menuOpen.addEventListener('click', function(){
    menuOpen.classList.toggle('bxs-grid-alt');
    menuOpen.classList.toggle('bx-x');
    menuWrap.classList.toggle('active')
})


kotak.addEventListener("click", function () {
     kotak.classList.toggle("oi"); // Toggle class kecil untuk animasi
});

kotakdesk.addEventListener("click", function () {
    kotakdesk.classList.toggle("njay"); // Toggle class kecil untuk animasi
});

kotakavatar.addEventListener("click", function () {
    kotakavatar.classList.toggle("ea"); // Toggle class kecil untuk animasi
});