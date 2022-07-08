import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/HomeClothes.module.scss";
import addtocart from "../public/assets/addtocart.svg";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartCardState, cartState, inventoryState } from "../utils/recoil";
import type { Inventory } from "../utils/types";

// Datos de la ropa van como props

const ClotheCard = ({ productData }: any) => {
  const [cart, setCart] = useRecoilState<any>(cartState);
  const [cartCard, setCartCard] = useRecoilState<any>(cartCardState);
  const inventory = useRecoilValue(inventoryState);

  const addItem = (productData:any) => {
    console.log('Agregado:', productData)
    setCart({ ...cart, [productData.id]: (cart[productData.id] || 0) + 1 });
    setCartCard({...cartCard, [productData.id]: productData});
    // setCartCard([...cartCard, {[productData.id]: productData}]);
  }

  return (
    <div key={productData.id} className={styles.clothe_card}>
      <div
        className={styles.img_background}
        onClick={()=>addItem(productData)}
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
