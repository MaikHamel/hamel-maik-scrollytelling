
let fleche1 = document.querySelectorAll('.flecheimg');

gsap.fromTo(['.flecheimg'], {
    filter: 'invert(0%) sepia(15%) saturate(7500%) hue-rotate(9deg) brightness(86%) contrast(105%)'

},
{
    filter: 'invert(99%) sepia(19%) saturate(147%) hue-rotate(170deg) brightness(112%) contrast(100%)', repeat:-1, duration:1, ease: "sine.inOut", stagger: {
        each: 0.1,
    }
})

let corps = document.querySelector(".corps");



window.addEventListener('scroll', () => {
    corps.classList.toggle("isScrolling");
    
    setTimeout(() => {
        corps.classList.remove("isScrolling")
    },100);
});
/*
let minuteur = setTimeout(() => {
    corps.classList.remove("isScrolling")
    console.log("allo")
},1000);

*/


