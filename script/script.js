
let mm = gsap.matchMedia();

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

let titre = gsap.timeline()
.fromTo(".titremorph",{
   color: '#000000',
},{
    duration:4, 
    repeat: 1,
    ease: "sine.inOut",
    color: '#FFFFFF',
    yoyo:true,
})
.fromTo(".Rmorph",
    {
        opacity:"0",
    },
{
    opacity:"1",
    duration:4, 
    ease: "sine.inOut",
    yoyo:false, 
})
.to(".titre1perso",{
    y: "65vh",
    ease: "none",
})


let chapitre1 = gsap.timeline()
.fromTo(".texte1",{
    opacity:"0",
    color: '#000000',
    textShadow:" -1px 0 rgb(0, 0, 0), 0 1px rgb(3, 3, 3), 1px 0 rgb(0, 0, 0), 0 -1px rgb(0, 0, 0)",
},{
    duration:4,
    opacity:"1",
    ease: "sine.inOut",
    color: '#FFFFFF',
    textShadow: "-1px 0 rgb(255, 255, 255), 0 1px rgb(255, 255, 255), 1px 0 rgb(255, 255, 255), 0 -1px rgb(255, 255, 255)",
})
.fromTo(".image1perso",{
    y:"-25vh",
},{
    rotation:"10",
    yoyo:"true",
    y:"100vh",
    duration:3, 
    ease: "none",

})

let chapitre2 = gsap.timeline()
.fromTo(".image2perso",{
    x:"-60vw",
},{
    duration:4, 
    ease: "easeIn",
    x:"5vw",
})
.from(".image2monstre",{
    y:"-70vh",
    duration:3,
    ease: "easeIn",

},'-=3')
.fromTo(".texte2",{
    opacity:"0",
},{
    opacity:"1",
    duration:4,
    ease: "easeIn",
},)

let chapitre3 = gsap.timeline()
.fromTo(".texte3",{
    opacity:"0",
},{
    opacity:"1",
    duration:4,
    ease: "easeIn",
})
.fromTo(".image3perso",{
    x:"-60vw"
},{
    duration:9,
    ease:"none",
    x:"70vw"
})
.fromTo(".image3monstre",{
    opacity:"0",
},{
    duration:5,
    opacity:"1",
    ease: "sine.inOut",
    repeat: 1,
    yoyo:true,
},'-=8')

let chapitre4 = gsap.timeline()
.fromTo(".image4perso",{
    x:"-70vw",
},{
    duration:4, 
    ease: "easeIn",
    x:"-3vw",
})
.fromTo(".image4monstre",{
    x:"90vw",
},{
    duration:4, 
    ease: "easeIn",
    x:"0vw",
},'<')
.fromTo(".texte4",{
    opacity:"0",
},{
    opacity:"1",
    duration:4,
    ease: "easeIn",
},'-=3')

let chapitre5 = gsap.timeline()

.from(".imageconstructiondevant",{
    duration:4,
    x:"-100vw",
})

.from(".imageconstructionmilieu",{
    duration:4,
    x:"100vw",
},'<')

.from(".rectanglecontainer",{
    duration:4,
    y:"-100vw",
},'<')

.from(".image5perso",{
    duration:4,
    y:"-100vw",
    x:"-100vw",
},'<')

.from(".couleurspritebg",{
    duration:4,
    y:"100vw",
    x:"100vw",
},'<')
.fromTo(".texte5",{
    opacity:"0",
},{
    opacity:"1",
    duration:4,
    ease: "easeIn",
},'-=3')

let chapitre6 = gsap.timeline()
.fromTo(".image6perso",{
    x:"-60vw",
},{
    duration:4, 
    ease: "easeIn",
    x:"-3vw",
})
.fromTo(".texte6",{
    opacity:"0",
},{
    opacity:"1",
    duration:4,
    ease: "easeIn",
},'-=3')

let chapitre7 = gsap.timeline()
.from(".image7perso",{
    y:"60vw",
    duration:4, 
    ease: "easeIn",
})
.fromTo(".texte7",{
    opacity:"0",
},{
    opacity:"1",
    duration:4,
    ease: "easeIn",
},'-=3')

let chapitre8 = gsap.timeline()

.fromTo(".bgsprite.un",{
    opacity:"0",
    scaleY:0,
    scaleX:0,
},{
    scaleY:1,
    scaleX:1,
    opacity:"1",
    duration:7,
    ease: "easeIn",
})
.from(".image8perso",{
    x:"-60vw",
    duration:4, 
    ease: "easeOut",
},'-=5')
.fromTo(".texte8",{
    opacity:"0",
    
},{
    
    opacity:"1",
    duration:4,
    ease: "easeIn",
},'-=3')
