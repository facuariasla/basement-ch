import React from 'react'
import styles from '../styles/HomeClothes.module.scss'
import hoodie from '../public/assets/hoodie.png'
import Image from 'next/image'
// Datos de la ropa van como props

const ClotheCard = () => {
  return (
    <div className={styles.clothe_card}>
      <div className={styles.img_cont}>
        {/* arreglar configs de la imagen */}
        <Image src={hoodie} width={1050}/>
      </div>
      <div className={styles.description}>
        <p>clothename</p>
        <p> $0.00</p>
      </div>
    </div>
  )
}

export default ClotheCard