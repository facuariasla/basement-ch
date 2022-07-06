import React from 'react'
import ClotheCard from './ClotheCard'
import styles from '../styles/HomeClothes.module.scss'

const Clothes = () => {
  return (
    <div className={styles.clothes_container}>
      <ClotheCard/>
      <ClotheCard/>
      <ClotheCard/>
    </div>
  )
}

export default Clothes