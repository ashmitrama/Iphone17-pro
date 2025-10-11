function page1(){
  gsap.registerPlugin(ScrollTrigger);

gsap.from("#gethigh", {
  x: -2000,
  duration: 1,
  ease: "power2.inOut",
  scrollTrigger: {
    // markers: true,
    trigger: "#page1",
    start: "top 80%",
    end: "top 70%",
    scrub: 1
  }
});

gsap.from("#h1", {
  x: 200,
  duration: 1,
  scrollTrigger: {
    // markers: true,
    trigger: ".sc",
    start: "top 80%",
    end: "top 50%",
    scrub:1
  }
})

const sections = gsap.utils.toArray(".sc");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: "#page1",
    pin: true,
    scrub: 1,
    end: () => "+=" + document.querySelector("#showcase").offsetWidth
  }
});

const vid1 = document.getElementById("vid1");

ScrollTrigger.create({
  trigger: "#vid1",
  // markers:true,
  start: "top 80%",
  end: "bottom 10%",
  onEnter: () => vid1.play(),
  onLeave: () => vid1.pause(),
  onEnterBack: () => vid1.play(),
  onLeaveBack: () => vid1.pause()
});



const vid2 = document.getElementById("vid2");

ScrollTrigger.create({
  trigger: "#vid2",
  // markers:true,
  start: "top 0%",
  end: "bottom -50%",
  onEnter: () => vid2.play(),
  onLeave: () => vid2.pause(),
  onEnterBack: () => vid2.play(),
  onLeaveBack: () => vid2.pause()
});

gsap.from("#h2", {
  y: 200,
  duration: 1,
  scrollTrigger: {
    // markers: true,
    trigger: "#vid2",
    start: "top 5%",
    end: "top -10%",
    scrub:1
  }
})

gsap.from("#h3", {
  y: -200,
  duration: 1,
  scrollTrigger: {
    // markers: true,
    trigger: "#vid3",
    start: "top -10%",
    end: "",
    scrub:1
  }
})

const vid3 = document.getElementById("vid3");

ScrollTrigger.create({
  trigger: "#vid3",
  // markers:true,
  start: "top -25%",
  end: "bottom -50%",
  onEnter: () => vid3.play(),
  onLeave: () => vid3.pause(),
  onEnterBack: () => vid3.play(),
  onLeaveBack: () => vid3.pause()
});

const vid4 = document.getElementById("vid4");

ScrollTrigger.create({
  trigger: "#vid4",
  // markers:true,
  start: "top -75%",
  end: "bottom -150%",
  onEnter: () => vid4.play(),
  onLeave: () => vid4.pause(),
  onEnterBack: () => vid4.play(),
  onLeaveBack: () => vid4.pause()
});
}
page1();

const pg2v2 = document.getElementById("pg2v");

ScrollTrigger.create({
  trigger: "#pg2v",
  // markers:true,
  start: "top 80%",
  end: "bottom 10%",
  scrub:1,
  onEnter: () => pg2v.play(),
  onLeave: () => pg2v.pause(),
  onEnterBack: () => pg2v.play(),
  onLeaveBack: () => pg2v.pause()
});

