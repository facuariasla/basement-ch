import React, { useState } from 'react'
import styles from "../styles/Cart.module.scss";

import { useRecoilState } from 'recoil';
import { drawerState } from '../utils/recoil';
import CardCart from './CardCart';

// Este componente recibe la data del carrito
// y mapea los items como <CardCart/>

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
        <div className={styles.cards_container}>
          <CardCart/>
          
        </div>
      </div>

      <div className={styles.cart_total_checkout}>
        <div className={styles.cart_total}>
          <p>TOTAL:</p>
          <p>$0.00</p>
        </div>
        <div className={styles.cart_checkout}>
          <div>
            <p>CHECKOUT</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default DrawerCart