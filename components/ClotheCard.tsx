import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/HomeClothes.module.scss";
import addtocart from "../public/assets/addtocart.svg";
import { useRecoilState } from "recoil";
import { cartState } from "../utils/recoil";
import type { Inventory } from "../utils/types";

// Datos de la ropa van como props

const ClotheCard = ({ productData }: any) => {
  const [cart, setCart] = useRecoilState(cartState);

  const addItem = (productData:any) => {
    console.log(cart)
    console.log(productData)
  
  }

  return (
    <div key={productData.id} className={styles.clothe_card}>
      <div
        className={styles.img_background}
        onClick={(e: any)=>addItem(e)}
      >
        <div className={styles.img_container}>
          <Image
            src={productData.src}
            width={900}
            objet-fit="cover"
            alt={productData.productId}
          />
        </div>
        <div className={styles.addtocart}>
          <Image
            src={addtocart}
            width={200}
            objet-fit="cover"
            alt={productData.productId}
          />
        </div>
      </div>
      <div className={styles.description}>
        <p>{productData.clothename}</p>
        <p> ${productData.price}</p>
      </div>
    </div>
  );
};

export default ClotheCard;
