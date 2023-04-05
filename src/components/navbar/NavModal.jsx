import React from "react";
import classes from "./navmodal.module.scss";
import { motion } from "framer-motion";

const NavModal = ({ children }) => {
  return (
    <motion.div
      className={classes.navmodal}
      initial={{ opacity: 0, right: -800 }}
      animate={{ opacity: 1, right: 0, transition: { duration: 0.4 } }}
      exit={{ opacity: 0, right: -800, transition: { duration: 0.4 } }}
    >
      {children}
    </motion.div>
  );
};

export default NavModal;
