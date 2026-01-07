
function loadingAnimation() {
    var tl = gsap.timeline();
    tl.from(".line h1", {
        y: 150,
        stagger: 0.25,
        duration: 0.8,
        delay: 0.5,
        ease: "power4.out"
    })
    tl.from("#line1-part1", {
        opacity: 0,
        onStart: function () {
            let i = 0;
            function timer() {
                if (i <= 100) {
                    document.querySelector("#line1-part1 h5").innerHTML = i;
                    i++;
                }
            }
            setInterval(timer, 35);
        }
    });
    tl.to(".line h2", {
        opacity: 0,
        animationName: "anime"
    })
    tl.to("#loader", {
        opacity: 0,
        duration: 0.5,
        delay: 0.5,
    })
    tl.from("#page1", {
        delay: 0.2,
        y: 1600,
        duration: 1.2,
        ease: "power4.out"
    })
    tl.to("#loader", {
        display: "none",
    })
    tl.from("#nav", {
        opacity:0,
    })
    tl.from("#hero1 h1, #hero2 h1,#hero3, #hero4 h1", {
        y: 500,
        stagger: 0.1,
        duration: 0.8,
        ease: "power4.out"
    })
    
}
loadingAnimation();

function cursorAnimation() {
    document.addEventListener("mousemove", function (dets) {
        gsap.to("#crsr", {
            left: dets.x,
            top: dets.y,
            duration: 0.2, // Small duration for smoothness
            ease: "power2.out"
        })
    });


    Shery.makeMagnet("#nav-part2 h4, .brand__svg" /* Element to target.*/, {
        //Parameters are optional.
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });
}
cursorAnimation();