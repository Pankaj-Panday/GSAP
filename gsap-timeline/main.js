const menuOpenIcon = document.querySelector("#nav i");
const menuCloseIcon = document.querySelector("#full i");

const tl = gsap.timeline();

tl.to("#full", {
  right: 0,
  duration: 0.4,
});

tl.from("h4", {
  x: 150,
  duration: 0.3,
  stagger: 0.2,
  opacity: 0,
});

tl.from("#full i", {
  opacity: 0,
  ease: "none",
  duration: 0.1,
});

tl.pause();

menuOpenIcon.addEventListener("click", function () {
  tl.play();
});

menuCloseIcon.addEventListener("click", function () {
  tl.reverse();
});
