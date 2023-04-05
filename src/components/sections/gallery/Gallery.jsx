import React, { useRef, useEffect, useContext, useState } from "react";
import { useInView } from "framer-motion";
import { NavContext } from "../../../store/NavContext";
import classes from "./gallery.module.scss";

import img1 from "../../../assets/res1.png";
import img2 from "../../../assets/res2.png";
import img3 from "../../../assets/res3.png";

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-35%" });
  const { setActiveLink } = useContext(NavContext);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (isInView) {
      if (!loaded) setLoaded(true);
      setActiveLink("gallery");
    }
  }, [isInView, loaded]);

  return (
    <div className={classes.gallery} id="gallery" ref={ref}>
      <div
        className={classes.wrapper}
        style={{
          opacity: (isInView && !loaded) || loaded ? 1 : 0,
          transform:
            (isInView && !loaded) || loaded ? "none" : "translateY(200px)",
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1)",
        }}
      >
        <h2>Galeria realizacji</h2>
        <div className={classes.images}>
          <div>
            <img src={img1} alt="realization" />
          </div>
          <div>
            <img src={img2} alt="realization" />
          </div>
          <div>
            <img src={img3} alt="realization" />
          </div>
        </div>
        <a
          className="button white"
          href="https://www.oferteo.pl/aski-bud/firma/4885001"
          target="_blank"
        >
          Pokaż wszystkie
        </a>
      </div>
    </div>
  );
};

export default Gallery;
