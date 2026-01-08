let headerTag=document.querySelector("#header")
let headerLogo=document.querySelector("header img")
window.addEventListener("scroll",()=>{
    if(window.scrollY>=300){
        headerTag.style.top="0px"
        headerLogo.style.height="60px"
    }
    else{
        headerTag.style.top="20px"
        headerLogo.style.height="100px"
    }
})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false,
            loop:true
        }
    }
})
