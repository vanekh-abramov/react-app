import React from "react";
import styles from "./contentStyles.module.scss";
import Descriptions from "./Description";
import Post from "./Post";

const Content = () => {

  console.log('Zheka lox')

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
      <div className={styles.enter_container}>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className={styles.textarea}
        ></textarea>
        <div className={styles.enter_button}>Enter</div>
      </div>
      <div className={styles.post_wrapper}>
        <Post
          src="https://cspromogame.ru//storage/upload_images/avatars/1299.jpg"
          text="Hi everybody"
          likes="1"
        />
        <Post
          src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg"
          text="Im good today"
          likes="1"
        />
        <Post
          src="https://trikky.ru/wp-content/blogs.dir/1/files/2020/08/17/2859972401.jpg"
          text="I wawnna to go for a walk"
          likes="1"
        />
        <Post
          src="https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg"
          text="Im write this code"
          likes="1"
        />
        <Post
          src="https://shapka-youtube.ru/wp-content/uploads/2020/04/leon.jpg"
          text="I love brawl stars"
          likes="1"
        />
        <Post
          src="https://proslang.ru/wp-content/uploads/2019/03/avatarka_1-300x300.jpg"
          text="Wait me mt furer"
          likes="1"
        />
        <Post
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKMSCIIiRsM4PIW7VRi0bDf-78QbPpCv9j6g&usqp=CAU"
          text="MMR is just a number"
          likes="1"
        />
        <Post
          src="https://pristor.ru/wp-content/uploads/2019/11/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%B5%D0%BA001.jpg"
          text="welcome to the 2007"
          likes="1"
        />
      </div>
    </>
  );
};

export default Content;
