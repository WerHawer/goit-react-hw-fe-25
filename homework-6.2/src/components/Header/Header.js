import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import slideTransition from "../../transitions/slideLogo.module.css";
import styles from "../App.module.css";

const Header = () => {
  const [logo, setLogo] = useState(false);

  useEffect(() => {
    setLogo(true);
  }, []);

  return (
    <CSSTransition in={logo} timeout={500} classNames={slideTransition}>
      <h1 className={styles.phonebook}>Phonebook</h1>
    </CSSTransition>
  );
};

export default Header;
