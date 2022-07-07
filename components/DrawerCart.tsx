import React, { useState } from 'react'
import styles from "../styles/Cart.module.scss";

import { useRecoilState } from 'recoil';
import { drawerState } from '../utils/recoil';

const DrawerCart = () => {
  const [cartOpen, setCartOpen] = useRecoilState(drawerState);

  return (
    <div className={styles.cart_container}>
    <div className={styles.cart}>
      <div className={styles.top_cart}>
        <div className={styles.topbtns}>
          <nav onClick={()=>setCartOpen(false)}>→ CLOSE</nav>
        </div>

        <div className={styles.titles}>
          <h2>YOUR</h2>
          <h2 className={styles.subtitle}>CART</h2>
        </div>

        {/* card container */}
        <div>
          {/* card: */}
          <div className={styles.item_card}>
            <div className={styles.card_img_container}>
              <div>IMAGE</div>
            </div>

            <div className={styles.card_data_container}>
              <div className={styles.card_subtitles_container}>
                <h4>SUBTITLE</h4>
                <p>Uniex Basic Softstyles T-Shirt</p>
              </div>
              <div>
                <div className={styles.card_quantity}>
                  <p>QUANTITY: </p>
                  <div>
                    <span className={styles.card_quantity_btn}> - </span>
                    <p> 10 </p>
                    <span className={styles.card_quantity_btn}> + </span>
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
        </div>
      </div>

      <div className={styles.cart_total_checkout}>
        <div className={styles.cart_total}>
          <p>TOTAL:</p>
          <p>$0.00</p>
        </div>
        <div className={styles.cart_checkout}>
          <p>CHECKOUT</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default DrawerCart