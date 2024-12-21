function page1Animation() {
  const tl = gsap.timeline();

  tl.from("nav h1, nav h4, nav button", {
    y: -25,
    duration: 0.7,
    delay: 0.5,
    opacity: 0,
    stagger: 0.1,
  });

  tl.from(".center-part1 h1", {
    x: -250,
    opacity: 0,
    duration: 0.5,
  });

  tl.from(".center-part1 p", {
    x: -100,
    opacity: 0,
    duration: 0.4,
  });

  tl.from(".center-part1 button", {
    opacity: 0,
    duration: 0.1,
  });

  tl.from(
    ".center-part2 img",
    {
      opacity: 0,
      duration: 0.5,
    },
    "-=0.7"
  );
}

page1Animation();

gsap.from(".section1bottom img", {
  y: 30,
  opacity: 0,
  duration: 0.2,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".section1bottom img",
    start: "top 70%",
  },
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2",
    start: "top 50%",
    end: "center 5%",
    // markers: true,
    scrub: 1,
  },
});

tl.from(".services", {
  y: 40,
  duration: 0.5,
  opacity: 0,
});

tl.from(
  ".elem:nth-child(2n + 1)",
  {
    x: -250,
    duration: 4,
    stagger: 3,
    opacity: 0,
  },
  "yenaamwaleeksathchalenge"
);

tl.from(
  ".elem:nth-child(2n)",
  {
    x: 250,
    duration: 4,
    stagger: 3,
    opacity: 0,
  },
  "yenaamwaleeksathchalenge"
);
