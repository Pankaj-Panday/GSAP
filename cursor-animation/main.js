const main = document.querySelector("#main");
const cursor = document.querySelector("#cursor");
const imgDiv = document.querySelector("#image");

main.addEventListener("mousemove", function (event) {
  gsap.to(cursor, {
    x: event.x + 10,
    y: event.y + 10,
    duration: 0.7,
  });
});

imgDiv.addEventListener("mouseenter", function (event) {
  cursor.innerHTML = "View more";
  gsap.to(cursor, {
    scale: 4,
    backgroundColor: "rgba(255, 255, 255, 0.584)",
  });
});

imgDiv.addEventListener("mouseleave", function (event) {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "white",
  });
});
