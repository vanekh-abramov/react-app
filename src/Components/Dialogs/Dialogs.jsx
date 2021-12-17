import React from "react";
import Dialog from "./Dialog";
import styles from "./dialogsStyles.module.scss";
import Message from "./Message";

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: "Vania" },
    { id: 2, name: "Alena" },
    { id: 3, name: "Lenya" },
    { id: 4, name: "Margarita" },
    { id: 5, name: "Mama" },
  ];

  return (
    <>
      <div className={styles.dialog}>
        <div className={styles.dialogs}>
          <Dialog name="Vania" id="1" />
          <Dialog name="Alena " id="2" />
          <Dialog name="Lenya" id="3" />
          <Dialog name="Margarita" id="4" />
          <Dialog name="Mama" id="5" />
        </div>
        <div className={styles.messages}>
          <Message text="Hi, Vania, How are u?" />
          <Message text="Hi, I`m ok, and u ?" />
          <Message text="i`m fine, thx)))" />
          <Message text="see u next time, im so busy" />
        </div>
      </div>
    </>
  );
};

export default Dialogs;
