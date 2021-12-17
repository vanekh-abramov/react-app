import React from "react";
import styles from "./headerStyles.module.scss";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/2048px-BMW_logo_%28gray%29.svg.png"
          alt=""
          className={styles.header_img}
        />
      </header>
    </>
  );
};

export default Header;
