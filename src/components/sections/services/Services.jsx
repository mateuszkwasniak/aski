import React, { useRef, useEffect, useContext, useState } from "react";
import { useInView } from "framer-motion";
import { NavContext } from "../../../store/NavContext";
import classes from "./services.module.scss";
import icon from "../../../assets/list-icon.svg";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-35%" });
  const { setActiveLink } = useContext(NavContext);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (isInView) {
      if (!loaded) setLoaded(true);
      setActiveLink("services");
    }
  }, [isInView, loaded]);

  return (
    <div className={classes.services} id="services" ref={ref}>
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
          <h2>Nasze usługi</h2>
        </div>
        <div className={classes.right}>
          <div className={classes.columns}>
            <ul>
              <li>
                <div>
                  <img src={icon} alt="list" />
                </div>
                <span>Malowanie tradycyjne</span>
              </li>
              <li>
                <div>
                  <img src={icon} alt="list" />
                </div>
                <span>Malowanie natryskowe</span>
              </li>
              <li>
                <div>
                  <img src={icon} alt="list" />
                </div>
                <span>Montaż sufitów podwieszanych GK</span>
              </li>
              <li>
                <div>
                  <img src={icon} alt="list" />
                </div>
                <span>Montaż sufitów systemowych typu armstrong</span>
              </li>
            </ul>
            <ul>
              <li>
                <div>
                  <img src={icon} alt="list" />
                </div>
                <span>Montaż suchej zabudowy</span>
              </li>
              <li>
                <div>
                  <img src={icon} alt="list" />
                </div>
                <span>Układanie glazury</span>
              </li>
              <li>
                <div>
                  <img src={icon} alt="list" />
                </div>
                <span>Szpachlowanie (gładź)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
