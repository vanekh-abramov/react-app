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

  let massagesData = [
    { id: 1, massage: "Hi, Vania, How are u?" },
    { id: 2, massage: "Hi, I`m ok, and u ?" },
    { id: 3, massage: "i`m fine, thx)))" },
    { id: 4, massage: "see u next time, im so busy" },
    { id: 5, massage: "CHECKING MASSAGE" },
  ];

  return (
    <>
      <div className={styles.dialog}>
        <div className={styles.dialogs}>
          <Dialog name={dialogsData[0].name} id={dialogsData[0].id} />
          <Dialog name={dialogsData[1].name} id={dialogsData[1].id} />
          <Dialog name={dialogsData[2].name} id={dialogsData[2].id} />
          <Dialog name={dialogsData[3].name} id={dialogsData[3].id} />
          <Dialog name={dialogsData[4].name} id={dialogsData[4].id} />
        </div>
        <div className={styles.messages}>
          <Message text={massagesData[0].massage} id={massagesData[0].id} />
          <Message text={massagesData[1].massage} id={massagesData[1].id} />
          <Message text={massagesData[2].massage} id={massagesData[2].id} />
          <Message text={massagesData[3].massage} id={massagesData[3].id} />
          <Message text={massagesData[4].massage} id={massagesData[4].id} />
        </div>
      </div>
    </>
  );
};

export default Dialogs;
