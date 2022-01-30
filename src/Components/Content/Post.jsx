import React from "react";
import styles from "./contentStyles.module.scss";

const Post = ({ src, text, likes }) => {
  return (
    <>
      <div className={styles.post}>
        <img src={src} alt="" className={styles.post_img} />
        <p className={styles.post_text}>{text}</p>
      </div>
      <div className={styles.like_counter}>Likes: {likes}</div>
    </>
  );
};

export default Post;
