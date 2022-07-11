import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styles from "../styles/Cart.module.scss";
import { cartCardState, cartState, inventoryState, totalState } from "../recoil";

const CardCart = () => {
  const inventory = useRecoilValue(inventoryState);
  const [cart, setCart] = useRecoilState<any>(cartState);
  const [cartCard, setCartCard] = useRecoilState<any>(cartCardState);

  const subtotalItem = useRecoilValue(totalState);



  const viewData = () => {
    const data = inventory?.filter((el) => cart[el.id]);
    console.log(data);
    console.log(data.map((el) => el));
  };

  return (
    <div className={styles.item_card}>
      <div className={styles.card_img_container} onClick={viewData}>
        <div>IMAGE</div>
      </div>

      <div className={styles.card_data_container}>
        <div className={styles.card_subtitles_container}>
          <h4>NOMBRE</h4>
          <p>Uniex Basic Softstyles T-Shirt</p>
        </div>
        <div>
          <div className={styles.card_quantity}>
            <p>QUANTITY: </p>
            <div>
              <span className={styles.card_quantity_btn}>-</span>
              <p> 10 </p>
              <span className={styles.card_quantity_btn}>+</span>
            </div>
          </div>
          <div className={styles.card_data_bottom}>
            <div className={styles.card_data_sizes}>
              <p>SIZE:</p>
              <div className={styles.card_data_sizes_cont}>
                <span>S</span>
                <span>M</span>
                <span>L</span>
                <span>XL</span>
              </div>
            </div>
            <p className={styles.card_price}>$0.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCart;
