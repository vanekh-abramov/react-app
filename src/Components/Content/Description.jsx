import React from "react";
import styles from "./contentStyles.module.scss";

const Descriptions = (props) => {
  return (
    <>
      <div className={styles.profile_description}>
        <h1 className={styles.profil_name}>{props.profilName}</h1>
        <p className={styles.profile_birthday}>Birthday: {props.profileBirthday}</p>
        <p className={styles.profile_city}>City: {props.profilCity}</p>
        <p className={styles.profile_education}>Education: {props.profilEducation}</p>
      </div>
    </>
  );
};

export default Descriptions;