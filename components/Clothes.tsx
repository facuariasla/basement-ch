import React from "react";
import ClotheCard from "./ClotheCard";
import styles from "../styles/HomeClothes.module.scss";
import hoodie from "../public/assets/hoodie.png";
import shirt from "../public/assets/shirt.png";
import cap from "../public/assets/cap.png";

const clothesData = [
  {
    id: Math.random() * 9999,
    clothename: "Black t-shirt",
    price: "7.95",
    src: shirt,
  },
  {
    id: Math.random() * 9999,
    clothename: "Black hoodie",
    price: "13",
    src: hoodie,
  },
  {
    id: Math.random() * 9999,
    clothename: "Black cap",
    price: "23",
    src: cap,
  },
];

const Clothes = () => {
  return (
    <div className={styles.clothes_container}>
      {clothesData?.map((el) => (
        <ClotheCard productData={el} key={el.id}/>
      ))}
    </div>
  );
};

export default Clothes;
