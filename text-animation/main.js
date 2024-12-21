const h1 = document.querySelector("h1");

function breakText(elem) {
  const text = elem.textContent.split("");
  let newText = "";
  const halfIndex = Math.floor(text.length / 2);
  text.forEach((char, index) => {
    if (index < halfIndex) newText += `<span class='a'>${char}</span>`;
    else newText += `<span class='b'>${char}</span>`;
  });
  return newText;
}

h1.innerHTML = breakText(h1);

gsap.from("h1 .a", {
  y: 60,
  opacity: 0,
  stagger: 0.15,
  ease: "back.out(3)",
  delay: 0.3,
  duration: 0.6,
});

gsap.from("h1 .b", {
  y: 50,
  opacity: 0,
  stagger: -0.12,
  ease: "back.out(3)",
  delay: 0.3,
  duration: 0.6,
});
