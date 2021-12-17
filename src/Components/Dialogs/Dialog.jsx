import React from "react";
import styles from "./dialogsStyles.module.scss";
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
  return (
    <NavLink
      to={`/dialogs/${props.id}`}
      className={`${styles.dialog_item} ${styles.item}`}
    >
      {props.name}
    </NavLink>
  );
};

export default Dialog;
