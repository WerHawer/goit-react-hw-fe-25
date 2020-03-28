import React from "react";
import css from "../Input/Input.module.css";
import { CSSTransition } from "react-transition-group";
import slideTransition from "../../transitions/slideAlert.module.css";

const Alert = ({ nameAlreadyUse, emptyField }) => (
  <>
    <CSSTransition
      in={nameAlreadyUse}
      timeout={250}
      classNames={slideTransition}
      unmountOnExit
    >
      <div className={css.alert}>name already use</div>
    </CSSTransition>

    <CSSTransition
      in={emptyField}
      timeout={250}
      classNames={slideTransition}
      unmountOnExit
    >
      <div className={css.alert}>Please, fill all fields</div>
    </CSSTransition>
  </>
);

export default Alert;
