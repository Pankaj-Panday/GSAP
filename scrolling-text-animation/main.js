// Remember that wheel event's deltaY isn't very reliable property to get the direction of the scroll wheel, don't use this method in production apps, use better solutions based on scroll events.

window.addEventListener("wheel", function (event) {
  if (event.deltaY > 0) {
    // scrolling down
    gsap.to("#marque", {
      x: "-200%",
      duration: 4,
      ease: "none",
      repeat: -1,
    });

    gsap.to("#marque img", {
      rotate: 180,
    });
  } else {
    // scrolling up
    gsap.to("#marque", {
      x: "0%",
      duration: 4,
      ease: "none",
      repeat: -1,
    });
    gsap.to("#marque img", {
      rotate: 0,
    });
  }
});
