import React from "react";
import styles from "./contentStyles.module.scss";

const Descriptions = ({
  profilName,
  profilCity,
  profilEducation,
  profileBirthday,
}) => {
  return (
    <>
      <div className={styles.profile_description}>
        <h1 className={styles.profil_name}>{profilName}</h1>
        <p className={styles.profile_birthday}>
          Birthday: {profileBirthday}
        </p>
        <p className={styles.profile_city}>City: {profilCity}</p>
        <p className={styles.profile_education}>
          Education: {profilEducation}
        </p>
      </div>
    </>
  );
};

export default Descriptions;
