import React, { useRef, useEffect, useContext, useState } from "react";
import classes from "./hero.module.scss";
import hero from "../../../assets/hero.png";
import { useInView } from "framer-motion";
import { NavContext } from "../../../store/NavContext";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-35%" });
  const { setActiveLink, isMini } = useContext(NavContext);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (isInView) {
      if (!loaded) setLoaded(true);
      setActiveLink("");
    }
  }, [isInView, loaded]);

  const style = {
    opacity: (isInView && !loaded) || loaded ? 1 : 0,
    transform: (isInView && !loaded) || loaded ? "none" : "translateY(200px)",
    transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1)",
  };

  return (
    <div className={classes.hero} ref={ref}>
      <div className={classes.wrapper} style={!isMini ? style : {}}>
        <div
          className={classes.left}
          style={
            isMini
              ? {
                  opacity: (isInView && !loaded) || loaded ? 1 : 0,
                  transform:
                    (isInView && !loaded) || loaded
                      ? "none"
                      : "translateY(200px)",
                  transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1)",
                }
              : {}
          }
        >
          <h1>
            Posiadamy wiedzę oraz doświadczenie <br /> w realizacji zabudów GK
          </h1>
          <p>
            ASKI Group od lat świadczy usługi w zakresie realizacji zabudów
            gipsowo-kartonowych. Stawiamy przede wszystkim na jakość, precyzję,
            terminowość i spełnianie potrzeb Klienta.
          </p>

          <a className={`button ${isMini && "white"}`} href="#services">
            Sprawdź usługi
          </a>
        </div>
        <div className={classes.right}>
          <img src={hero} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
