import React from "react";
import Dialog from "./Dialog";
import styles from "./dialogsStyles.module.scss";
import Message from "./Message";

const Dialogs = () => {
  const dialogsData = [
    { id: 1, name: "Vania" },
    { id: 2, name: "Alena" },
    { id: 3, name: "Lenya" },
    { id: 4, name: "Margarita" },
    { id: 5, name: "Mama" },
    { id: 6, name: "Zheka" },
  ];

  const massagesData = [
    { id: 1, massage: "Hi, Vania, How are u?" },
    { id: 2, massage: "Hi, I`m ok, and u ?" },
    { id: 3, massage: "i`m fine, thx)))" },
    { id: 4, massage: "see u next time, im so busy" },
    { id: 5, massage: "CHECKING MASSAGE" },
  ];

  const newData = massagesData.map(({ id, massage }) => {
    return <Message key={id} id={id} text={massage} />;
  });

  return (
    <>
      <div className={styles.dialog}>
        <div className={styles.dialogs}>
          {dialogsData.map(({ id, name }) => {
            return <Dialog key={id} id={id} name={name} />;
          })}
        </div>
        <div className={styles.messages}>{newData}</div>
      </div>
    </>
  );
};

export default Dialogs;
