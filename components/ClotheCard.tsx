import React from 'react'
import Image from 'next/image'
import styles from '../styles/HomeClothes.module.scss'
import hoodie from '../public/assets/hoodie.png';
import shirt from '../public/assets/shirt.png'
import cap from '../public/assets/cap.png'

// Datos de la ropa van como props

const ClotheCard = ({ productData }:any) => {
  return (
    <div key={productData.id} className={styles.clothe_card}>
      <div className={styles.img_background}>
        <div className={styles.img_container}>
        {/* arreglar configs de la imagen */}
          <Image src={productData.src} width={900} objet-fit='cover' />
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