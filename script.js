var tl = gsap.timeline();
tl.from(".line h1", {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5
})
tl.from(".line h2,#line1-part1", {
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
})
tl.to("#loader", {
    opacity: 0,
    duration: 0.2,
    delay: 4,
})
tl.from("#page1",{
    delay: 0.2,
    y: 1600,
    opacity: 0,
    ease:Power4
})
tl.to("#loader",{
    display: "none",
})