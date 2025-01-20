import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageComponent from "../../Image/image";
import { assets } from "../../../assets/assets";
import "./homepart.scss";

function Homepart1() {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
      scrollTrigger: {
        trigger: ".make_it_yours_container",
        start: "top center",
        end: "bottom center",
        scrub: 1,
        toggleActions: "play reverse play reverse",
      },
    })
      .to(imageRef.current, {
        scale: 1.2,
        duration: 1,
      })
      .to(
        textRef.current,
        {
          opacity: 0,
          duration: 1,
        },
        0
      )
      .to(imageRef.current, {
        scale: 1,
        duration: 1,
      }).to(textRef.current,{opacity : 1,duration : 1});
  }, []);

  return (
    <div>
      <section>
        <div className="make_it_yours_container">
          <div className="make_it_yours" ref={textRef}>
            <h1>
              Make it <span>yours</span> and take it with you
            </h1>
          </div>
          <div className="montain_image">
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg"
              width="1100px"
              ref={imageRef}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepart1;

