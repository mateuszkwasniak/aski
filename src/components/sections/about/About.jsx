import React, { useContext, useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import classes from "./about.module.scss";
import about from "../../../assets/about.png";
import { NavContext } from "../../../store/NavContext";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-35%" });
  const [loaded, setLoaded] = useState(false);
  const { activeLink, setActiveLink } = useContext(NavContext);

  useEffect(() => {
    if (isInView) {
      if (!loaded) setLoaded(true);
      setActiveLink("about");
    }
  }, [isInView, loaded]);

  useEffect(() => {
    !isInView && activeLink !== "services" && setActiveLink("");
  }, [isInView]);

  return (
    <div className={classes.about} id="about" ref={ref}>
      <div
        className={classes.wrapper}
        style={{
          opacity: (isInView && !loaded) || loaded ? 1 : 0,
          transform:
            (isInView && !loaded) || loaded ? "none" : "translateY(200px)",
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1)",
        }}
      >
        <div className={classes.left}>
          <img src={about}></img>
        </div>
        <div className={classes.right}>
          <h2>O nas</h2>
          <p>
            Firma Aski Group oferuje szeroką gamę usług z zakresu zabudowy GK:
            ściany, sufity (w tym obudowy PPOŻ i akustyczne oraz montaże sufitów
            modułowych), zabudowy poddasza, szpachlowanie, malowanie ścian i
            sufitów (tradycyjne oraz natryskowe).
          </p>
          <p>
            Posiadamy wiedzę i doświadczenie w realizacji zabudów GK w dużych
            inwestycjach, halach przemysłowych, zakładach produkcyjnych,
            biurowcach, sklepach i mieszkaniach.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
