import React, { useEffect, useContext, useRef } from "react";
import classes from "./footer.module.scss";
import { NavContext } from "../../../store/NavContext";
import { useInView } from "framer-motion";
import logo from "../../../assets/logo.svg";
import fb from "../../../assets/fb.svg";
import insta from "../../../assets/insta.svg";

const Footer = () => {
  const { setActiveLink } = useContext(NavContext);

  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-35%" });

  useEffect(() => {
    isInView && setActiveLink("footer");
  }, [isInView]);

  useEffect(() => {
    !isInView && setActiveLink("gallery");
  }, [isInView]);

  return (
    <div className={classes.footer} id="contact" ref={ref}>
      <div className={classes.top}>
        <div className={classes.left}>
          <div className={classes.logo}>
            <img src={logo} alt="logo"></img>
          </div>
          <h5>Skontaktuj się z nami:</h5>
          <span>Serhii: +48 732 564 727</span>
          <span>Aleksandr: +48 579 110 497</span>
          <span>askibud@gmail.com</span>
        </div>
        <div className={classes.right}>
          <div className={classes.column}>
            <h4>Adres</h4>
            <span>53-661, Wrocław</span>
            <span>Pl. Solidarności 1/3/5</span>
          </div>
          <div className={classes.socials}>
            <a
              className={classes.social}
              href="https://www.facebook.com/askibud"
              target="_blank"
            >
              <img src={fb} alt="social" />
            </a>
            <a
              className={classes.social}
              href="https://www.instagram.com/aski_bud"
              target="_blank"
            >
              <img src={insta} alt="social" />
            </a>
          </div>
        </div>
      </div>
      <div className={classes.bottom}>
        <span>Aski Group Sp. z o. o.</span>
      </div>
    </div>
  );
};

export default Footer;
