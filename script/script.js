
let fleche1 = document.querySelectorAll('#flecheimg');
gsap.fromTo(fleche1, {
    filter: 'invert(0%) sepia(15%) saturate(7500%) hue-rotate(9deg) brightness(86%) contrast(105%)'

},
{
    filter: 'invert(99%) sepia(19%) saturate(147%) hue-rotate(170deg) brightness(112%) contrast(100%)', repeat:-1, duration:1, yoyo: true, ease: "sine.inOut", stagger: {
        each: 0.1,
    }
})
