import React from "react";
import Header from "./Header";

import styles from "../styles/Layout.module.scss";

const HomeTitle = () => {
  return (
    <div className={styles.titles_container}>
      <h1 className={styles.home_title}>BASEMENT</h1>

      <div className={styles.title2_container}>
        <div>
          <h4>EST</h4>
        </div>
        
        <h1 className={styles.home_title2}>SUPLY</h1>

        <div>
          <h4>2K22</h4>
        </div>
      </div>
    </div>
  );
};

export default HomeTitle;
