import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const App = () => {
  const container = useRef();
  const boxRef = useRef();

  // kind of like useEffect
  useGSAP(
    () => {
      gsap.from(".box", {
        duration: 1,
        delay: 1,
        rotate: 720,
        opacity: 0,
        scale: 0,
      });
    },
    { scope: container } // notice that its not container.current but container because during scope you use the ref directly, or simply use the className like ".container"
  );

  const [position, setPosition] = useState(null);

  const random = gsap.utils.random(-500, 500, 50);

  useGSAP(
    () => {
      gsap.to(".second .circle", {
        x: position,
        duration: 0.5,
      });
    },
    {
      dependencies: [position],
    }
  );

  const { contextSafe } = useGSAP();

  const rotateBox = contextSafe(() => {
    gsap.to(boxRef.current, {
      rotate: 360,
      duration: 1,
    });
  });

  return (
    <main>
      <section className="first">
        <div ref={container} className="container">
          <div className="circle"></div>
          <div className="box"></div>
        </div>
        <div className="container2">
          <div className="circle"></div>
          <div className="box"></div>
        </div>
      </section>
      <section className="second">
        <button onClick={() => setPosition(random)}>Animate circle</button>
        <div className="circle"></div>
      </section>

      <section className="third">
        <button onClick={rotateBox}>Animate Box</button>
        <div className="box" ref={boxRef}></div>
      </section>
    </main>
  );
};

export default App;
