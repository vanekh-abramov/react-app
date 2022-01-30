import React from "react";
import styles from "./dialogsStyles.module.scss";
import { NavLink } from "react-router-dom";

const Dialog = ({id, name}) => {
  return (
    <NavLink
      to={`/dialogs/${id}`}
      className={`${styles.dialog_item} ${styles.item}`}
    >
      {name}
    </NavLink>
  );
};

export default Dialog;
