import React from 'react'
import Header from './Header'

import styles from "../styles/Layout.module.scss";

const HomeTitle = () => {
  return (
    <div className={styles.titles_container}>
      <h1 className={styles.home_title}>BASEMENT</h1>
      <h1 className={styles.home_title2}>SUPLY</h1>
    </div>
  )
}

export default HomeTitle