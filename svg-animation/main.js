let path = `M 10 100 Q 500 100 990 100`;
let finalPath = `M 10 100 Q 500 100 990 100`;

const string = document.querySelector("#string");

string.addEventListener("mousemove", (event) => {
  path = `M 10 100 Q ${event.offsetX} ${event.offsetY} 990 100`;
  gsap.to("svg path", {
    attr: {
      d: path,
    },
    duration: 0.1,
    ease: "power3.out",
  });
});

string.addEventListener("mouseleave", () => {
  gsap.to("svg path", {
    attr: {
      d: finalPath,
    },
    ease: "elastic.out(1.5,0.2)",
    duration: 1.2,
  });
});
