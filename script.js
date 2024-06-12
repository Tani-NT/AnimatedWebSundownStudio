const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function page3Animation(){
    var elemC = document.querySelector("#elem-container");
    var fixedImage = document.querySelector("#fixed-image");
    elemC.addEventListener("mouseenter",function () {
        fixedImage.style.display = "block";
    });
    elemC.addEventListener("mouseleave",function () {
        fixedImage.style.display = "none";
    });

    var elems = document.querySelectorAll(".elem");
    elems.forEach(function(e){
        e.addEventListener("mouseenter",function () {
        var image = e.getAttribute("data-image")
        fixedImage.style.backgroundImage = `url(${image})`;
        });
    });
}
page3Animation();

function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100
      });
}
swiperAnimation();

var menu = document.querySelector("nav h3")
var full = document.querySelector("#full-screen")
var navimg = document.querySelector("nav img")
var flag = 0
menu.addEventListener("click", function(){
    if(flag == 0){
        full.style.top = 0
        navimg.style.opacity = 0
        flag = 1
    }
    else{
        full.style.top = "-100%"
        navimg.style.opacity = 1
        flag = 0
    }
})