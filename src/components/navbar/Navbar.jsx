import React, { useState, useEffect, useContext } from "react";
import classes from "./navbar.module.scss";
import logo from "../../assets/logo.svg";
import { motion, AnimatePresence } from "framer-motion";
import { NavContext } from "../../store/NavContext";
import NavModal from "./NavModal";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const { activeLink, setActiveLink, isMini, isMicro } = useContext(NavContext);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className={`${classes.navbar} ${scrolled && classes.scrolled}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div
        className={classes.logo}
        onClick={() => {
          window.scrollTo(0, 0);
          window.history.replaceState({}, null, "/");
          setActiveLink("");
        }}
      >
        <img src={logo} alt="logo"></img>
      </div>
      {isMicro ? (
        <>
          <button
            className={classes.btnBurger}
            onClick={() => setIsOpened((prev) => !prev)}
          >
            <div
              className={`${classes.burger} ${isOpened ? classes.open : ""}`}
            />
          </button>
          <AnimatePresence>
            {isOpened && (
              <NavModal>
                <ul className={classes.modallist}>
                  <li>
                    <a
                      href="#about"
                      onClick={() => {
                        setActiveLink("about");
                        setIsOpened(false);
                      }}
                      style={{
                        borderBottom:
                          activeLink === "about" &&
                          "0.2rem solid var(--text-black1)",
                      }}
                    >
                      O nas
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      onClick={() => {
                        setActiveLink("services");
                        setIsOpened(false);
                      }}
                      style={{
                        borderBottom:
                          activeLink === "services" &&
                          "0.2rem solid var(--text-black1)",
                      }}
                    >
                      Usługi
                    </a>
                  </li>
                  <li>
                    <a
                      href="#gallery"
                      onClick={() => {
                        setActiveLink("gallery");
                        setIsOpened(false);
                      }}
                      style={{
                        borderBottom:
                          activeLink === "gallery" &&
                          "0.2rem solid var(--text-black1)",
                      }}
                    >
                      Realizacje
                    </a>
                  </li>
                  <li>
                    <a
                      className="button"
                      href="#contact"
                      onClick={() => {
                        setActiveLink("contact");
                        setIsOpened(false);
                      }}
                    >
                      Kontakt
                    </a>
                  </li>
                </ul>
              </NavModal>
            )}
          </AnimatePresence>
        </>
      ) : (
        <ul>
          <li>
            <a
              href="#about"
              onClick={() => {
                setActiveLink("about");
                setIsOpened(false);
              }}
              style={{
                borderBottom:
                  activeLink === "about" && "0.2rem solid var(--text-black1)",
              }}
            >
              O nas
            </a>
          </li>
          <li>
            <a
              href="#services"
              onClick={() => {
                setActiveLink("services");
                setIsOpened(false);
              }}
              style={{
                borderBottom:
                  activeLink === "services" &&
                  "0.2rem solid var(--text-black1)",
              }}
            >
              Usługi
            </a>
          </li>
          <li>
            <a
              href="#gallery"
              onClick={() => {
                setActiveLink("gallery");
                setIsOpened(false);
              }}
              style={{
                borderBottom:
                  activeLink === "gallery" && "0.2rem solid var(--text-black1)",
              }}
            >
              Realizacje
            </a>
          </li>
          <li>
            <a
              className="button"
              href="#contact"
              onClick={() => {
                setActiveLink("contact");
                setIsOpened(false);
              }}
            >
              Kontakt
            </a>
          </li>
        </ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
