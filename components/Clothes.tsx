import React from "react";
import ClotheCard from "./ClotheCard";
import styles from "../styles/HomeClothes.module.scss";

import { useRecoilValue } from "recoil";
import { inventoryState } from "../utils/recoil";

const Clothes = () => {
  // selector de recoil hace 'peticion' a la API y trae inventario
  const inventory = useRecoilValue(inventoryState);

  return (
    <div className={styles.clothes}>
      <div className={styles.clothes_container}>
        {inventory?.map((el) => (
          <ClotheCard productData={el} key={el.id} />
        ))}
      </div>
    </div>
  );
};

export default Clothes;
