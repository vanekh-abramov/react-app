import React from "react";
import styles from "./dialogsStyles.module.scss";

const Message = ({ text }) => {
  return <p className={`${styles.message_item} ${styles.item}`}>{text}</p>;
};

export default Message;
