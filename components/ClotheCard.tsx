import React from 'react'
import Image from 'next/image'
import styles from '../styles/HomeClothes.module.scss'
import addtocart from '../public/assets/addtocart.svg'


// Datos de la ropa van como props

const ClotheCard = ({ productData }:any) => {
  return (
    <div key={productData.id} className={styles.clothe_card}>
      <div className={styles.img_background}>
        <div className={styles.img_container}>
          <Image src={productData.src} width={900} objet-fit='cover' />
        </div>
        <div className={styles.addtocart}>
          <Image src={addtocart} width={200} objet-fit='cover' />
        </div>
      </div>
      <div className={styles.description}>
        <p>{productData.clothename}</p>
        <p> ${productData.price}</p>
      </div>
    </div>
  )
}

export default ClotheCard