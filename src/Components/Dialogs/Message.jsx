import React from "react";
import styles from "./dialogsStyles.module.scss";

const Message = (props) => {
  return (
    <p className={`${styles.message_item} ${styles.item}`}>
      {props.text}
    </p>
  );
};

export default Message;