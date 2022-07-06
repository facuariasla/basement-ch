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
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint doloremque illum reprehenderit vitae dolore.",
  },
  {
    id: Math.random() * 9999,
    clothename: "Black hoodie",
    price: "13",
    src: hoodie,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat cupiditate laboriosam laborum.",
  },
  {
    id: Math.random() * 9999,
    clothename: "Black cap",
    price: "23",
    src: cap,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iste ex ducimus assumenda.",
  },
];

const Clothes = () => {
  return (
    <div className={styles.clothes}>
      <div className={styles.clothes_container}>
        {clothesData?.map((el) => (
          <ClotheCard productData={el} key={el.id} />
        ))}
      </div>
    </div>
  );
};

export default Clothes;
