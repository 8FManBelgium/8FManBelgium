
gsap.fromTo("#title", {
    scale : 5.2,
    y : -180
}, {
    scale : 1,
    y: 0,
    duration : 1,
    scrollTrigger : {
        trigger : "#title",
        end: "bottom top",
        invalidateOnRefresh : true,
        scrub : 2,
        ease : "expoScale(0.5,7,none)",
    }
})

const discover_tl = gsap.timeline({
    scrollTrigger : {
        trigger : ".slide",
        start : "top 20%",
      /*  markers : true,*/
        scrub : 2,
        ease : "ease"
    }
})

discover_tl.to(".slide1", {
    y : 220
});

discover_tl.to(".slide2", {
    y : 220
});

discover_tl.to(".slide3", {
    y : 220
});

discover_tl.to(".slide4", {
    y : 220
});

gsap.to("#img-section2", {
    clipPath : "circle(100% at 50% 50%)",
    scrollTrigger : {
        trigger : "#image-section > .container",
        start : "top top",
        end : "bottom bottom",
        scrub : 2,
        pin : true,
        onEnter : () => {
            document.body.classList.add("dark-theme");
        },
        onLeaveBack : () => {
            document.body.classList.remove("dark-theme")
        }
    }
})


const gridWrapper = gsap.utils.toArray(".grid-items");

gridWrapper.forEach(wrapper =>{

    const boxes = wrapper.querySelectorAll('.box');

    boxes.forEach(box => {
        gsap.from(box, {
            y : 500,
            duration : 0.5,
            scrollTrigger : {
                trigger: box,
                start : "top bottom",
                end : "bottom top",
                scrub : 4,
            }
        })
    })

})


const heading = document.querySelector(".furniture-title h2");
const sections = gsap.utils.toArray(".grid-wrapper");

let text_h2 = gsap.timeline({
    scrollTrigger : {
        trigger : "#furniture-section > .container",
        start : "top 50%",
        end : "top 50%",
        scrub : 2,
        ease : "ease",
       // markers : true,
        onEnter : () =>{
            gsap.set(heading, {position : "fixed", bottom : 0, zIndex: -1000})
        },
        onEnterBack : () =>{
            gsap.set(heading, { position : "relative", bottom : "0"})
        }
    }
})

sections.forEach((section, i) => {
    ScrollTrigger.create({
        trigger: section,
        start : "bottom-=20% bottom",
        end : "bottom top",
        onEnter : () => {
            updateHeading(i)
            if (i === 0 ){
                document.body.classList.remove("dark-theme")
            }
        },
        onEnterBack : () => {
            updateHeading(i)
            if (i === 0 ){
                document.body.classList.add("dark-theme")
            }
        }
    })
})

function updateHeading(index){
    const headingTexts = ["Fotografie", "Photoshop"];
    heading.textContent = headingTexts[index]
}


    updateHeading(0)