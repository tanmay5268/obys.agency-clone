
function loadingAnimation() {
    var tl = gsap.timeline();
    tl.from(".line h1", {
        y: 150,
        stagger: 0.25,
        duration: 0.6,
        delay: 0.5
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
        delay: 3.6,
    })
    tl.from("#page1", {
        delay: 0.2,
        y: 1600,
        opacity: 0,
        ease: Power4
    })
    tl.to("#loader", {
        display: "none",
    })
}
loadingAnimation();