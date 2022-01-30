import React from "react";
import styles from "./contentStyles.module.scss";
import Post from "./Post";

const PostsComponent = () => {
  let postData = [
    {
      id: 1,
      text: "Hi everybody !!!",
      likes: 1,
      avatarSrc:
        "https://cspromogame.ru//storage/upload_images/avatars/1299.jpg",
    },
    {
      id: 2,
      text: "Im good today",
      likes: 12,
      avatarSrc:
        "https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg",
    },
    {
      id: 3,
      text: "I wawnna to go for a walk",
      likes: 10,
      avatarSrc:
        "https://trikky.ru/wp-content/blogs.dir/1/files/2020/08/17/2859972401.jpg",
    },
    {
      id: 4,
      text: "Im write this code",
      likes: 5,
      avatarSrc:
        "https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg",
    },
    {
      id: 5,
      text: "I love brawl stars",
      likes: 2,
      avatarSrc:
        "https://shapka-youtube.ru/wp-content/uploads/2020/04/leon.jpg",
    },
    {
      id: 6,
      text: "Wait me mt furer",
      likes: 1,
      avatarSrc:
        "https://proslang.ru/wp-content/uploads/2019/03/avatarka_1-300x300.jpg",
    },
    {
      id: 7,
      text: "MMR is just a number",
      likes: 0,
      avatarSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKMSCIIiRsM4PIW7VRi0bDf-78QbPpCv9j6g&usqp=CAU",
    },
    {
      id: 8,
      text: "welcome to the 2007",
      likes: 99,
      avatarSrc:
        "https://pristor.ru/wp-content/uploads/2019/11/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%B5%D0%BA001.jpg",
    },
  ];

  return (
    <>
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
        {postData.map(({ id, avatarSrc, text, likes }, index) => {
          return (
            <Post key={id} id={id} src={avatarSrc} text={text} likes={likes} />
          );
        })}
      </div>
    </>
  );
};

export default PostsComponent;
