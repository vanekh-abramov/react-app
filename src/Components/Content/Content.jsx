import React from "react";
import styles from "./contentStyles.module.scss";
import Descriptions from "./Description";
import PostsComponent from "./PostsComponent";


const Content = () => {

  

  return (
    <>
      <img
        className={styles.head_img}
        src="https://creativo.one/lessons/les5669/01.jpg"
        alt=""
      />
      <div className={styles.inner_content}>
        <div className={styles.avatar}>
          <img
            src="https://sun1.velcom-by-minsk.userapi.com/s/v1/if1/F7NRgAmQqJZRVrWqpAq3b0L0W9BpycXQOul_Wi1Clq9FqSFocYxoC2fezMoFv6G1U3tuDwII.jpg?size=200x200&quality=96&crop=1,197,809,809&ava=1"
            alt=""
            className={styles.ava_img}
          />
          <Descriptions
            profilName="Abramov Ivan"
            profileBirthday="25.08.2000"
            profilCity="Minsk"
            profilEducation="BSATU"
          />
        </div>
      </div>
      <PostsComponent />
    </>
  );
};

export default Content;
