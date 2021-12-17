import React from "react";
import styles from "./contentStyles.module.scss";

const Post = (props) => {
  return (
    <>
      <div className={styles.post}>
        <img src={props.src} alt="" className={styles.post_img} />
        <p className={styles.post_text}>{props.text}</p>
      </div>
      <div className={styles.like_counter}>Likes: {props.likes}</div>
    </>
  );
};

export default Post;
