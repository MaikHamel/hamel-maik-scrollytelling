
let mm = gsap.matchMedia();

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(MorphSVGPlugin);
gsap.registerPlugin(MotionPathPlugin);
gsap.set(".svgtrace",{drawSVG:"0% 0%"});





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
let textdraw = gsap.fromTo(".svgtrace",{
    drawSVG:"0% 0%"
},{
    paused:true,
    duration:4,
    drawSVG:"0% 100%",
    ease: "sine.inOut",
})

let titre = gsap.timeline({
    scrollTrigger: {
        markers: true,
        scrub: true,
        start: "1% top",
        end: "500% bottom",
        pin: true,
        trigger:'.titre'
        
    }
})


.fromTo(".titremorph",{
   color: '#000000',
},{
    duration:4, 
    repeat: 1,
    ease: "none",
    color: '#FFFFFF',
    yoyo:true,
    onStart: () => {
        textdraw.play()
    }
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

.to(".Rmorphpath", {
    morphSVG: ".titre1persopath"
})



.to(".Rmorph",{
    y: "65vh",
    ease: "none",
})


let chapitre1 = gsap.timeline({
    scrollTrigger: {
        markers: true,
        start: "3% top",
        end: "300% bottom",
        pin: true,
        trigger:'.chapitre1',
        toggleActions: "play reverse complete reset"
    }
}
)
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

let chapitre2 = gsap.timeline(
    {
        scrollTrigger: {
            markers: true,
            start: "3% top",
            end: "500% bottom",
            scrub: true,
            pin: true,
            trigger:'.chapitre2',
            
        }
    }
)
.fromTo(".imageparallaxdevant",{
    x:"400"
},{
    x:"-300",
    ease:"none",
    duration:2,

},'<')
.fromTo(".imageparallaxmilieu",{
    x:"200"
},{
    x:"-100",
    ease:"none",
    duration:3,

},"<")
.fromTo(".imageparallaxarriere",{
    x:"100"
},{
    x:"-50",
    ease:"none",
    duration:3,

},"<")

.fromTo(".image2perso",{
    x:"-60vw",
},{
    duration:4, 
    ease: "easeIn",
    x:"5vw",
},"<")
.from(".image2monstre",{
    y:"-70vh",
    duration:3,
    ease: "easeIn",

},'<')
.fromTo(".texte2",{
    opacity:"0",
},{
    opacity:"1",
    duration:4,
    ease: "easeIn",
},'<')

let chapitre3 = gsap.timeline(
    {
        scrollTrigger: {
            markers: true,
            start: "3% top",
            end: "500% bottom",
            scrub: true,
            pin: true,
            trigger:'.chapitre3',
            
        }
    }
)
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
    x:"100vw"
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

let chapitre4 = gsap.timeline(
    {
        scrollTrigger: {
            markers: true,
            start: "3% top",
            end: "500% bottom",
            scrub: true,
            pin: true,
            trigger:'.chapitre4',
            
        }
    }
)
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

let chapitre5 = gsap.timeline(
    {
        scrollTrigger: {
            markers: true,
            start: "3% top",
            end: "1000% bottom",
            scrub: true,
            pin: true,
            trigger:'.chapitre5',
            
        }
    }
)

.from(".imageconstructiondevant",{
    duration:3,
    x:"-100vw",
},'<')

.from(".imageconstructionmilieu",{
    duration:3,
    x:"100vw",
},'<')

.from(".rectanglecontainer",{
    duration:3,
    y:"-100vw",
},'<')

.from(".image5perso",{
    duration:3,
    y:"-100vw",
    x:"-100vw",
},'<')

.from(".couleurspritebg",{
    duration:3,
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

let chapitre6 = gsap.timeline(
    {
        scrollTrigger: {
            markers: true,
            start: "3% top",
            end: "500% bottom",
            scrub: true,
            pin: true,
            trigger:'.chapitre6',
            
        }
    }
)
.fromTo(".image6perso",{
    x:"-80vw",
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
.from('.image6monstre7',{
    x:"150",
})
.from('.image6monstre2',{
    x:"-150",
})
.from('.image6monstre4',{
    x:"150",
})
.from('.image6monstre3',{
    x:"-150",
})
.from('.image6monstre6',{
    x:"-150",
})

.from('.image6monstre5',{
    x:"150",
})

.fromTo(".image6monstre1",{
    y:"-40vh",
},{
    y:"10",
    ease: "easeInOut",
    yoyo:true,
    repeat:1,
})

.to('.image6monstre1',{
    rotation:90,
    duration: 2,
})
.to('.image6monstre1',{
   
    motionPath: {
        align:'.ligne_motion_1_path',
        alignOrigin: [0.5, 0.5],
        path:'.ligne_motion_1_path',
        autoRotate: true,
        start:0,
        end:1,
    },
    
    duration: 2,
},'<')
/*
.to('.image6monstre2',{
    motionPath: {
        align:'.motion_ligne_1_path',
        alignOrigin: [0.5, 0.5],
        path:'.motion_ligne_1_path',
        autoRotate: true,
        start:0,
        end:1,
    },
    duration: 2,
})
.to('.image6monstre3',{
    motionPath: {
        align:'.motion_ligne_2_path',
        alignOrigin: [0.5, 0.5],
        path:'.motion_ligne_2_path',
        autoRotate: true,
        start:0,
        end:1,
    },
    duration: 2,
})
.to('.image6monstre6',{
    motionPath: {
        align:'.motion_ligne_3_path',
        alignOrigin: [0.5, 0.5],
        path:'.motion_ligne_3_path',
        autoRotate: true,
        start:0,
        end:1,
    },
    duration: 2,
})
.to('.image6monstre5',{
    
    motionPath: {
        align:'.motion_ligne_4_path',
        alignOrigin: [0.5, 0.5],
        path:'.motion_ligne_4_path',
        autoRotate: true,
        start:0,
        end:1,
    },
    duration: 2,
})
*/

let chapitre7 = gsap.timeline(
    {
        scrollTrigger: {
            markers: true,
            start: "3% top",
            end: "500% bottom",
            scrub: true,
            pin: true,
            trigger:'.chapitre7',
            
        }
    }
)
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


let fin = gsap.fromTo(".textefin",{
    opacity:"0"
},{
    paused:true,
    opacity:"1",
    duration:4,
    yoyo:true,
    repeat:-1,

})


let chapitre8 = gsap.timeline(
    {
        scrollTrigger: {
            markers: true,
            start: "3% top",
            end: "1000% bottom",
            scrub: true,
            pin: true,
            trigger:'.chapitre8',
            
        }
    }
    
)
.fromTo(".couleurspritebg2",{
    opacity:"0",
    scaleY:0,
    scaleX:0,
},{
    scaleY:1,
    scaleX:1,
    opacity:"1",
    duration:10,
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
.fromTo(".fin",{
    opacity:"0",
},{
    opacity:"1",
    duration:4,
    onStart: () => {
        fin.play()
    }
},'+=4')







