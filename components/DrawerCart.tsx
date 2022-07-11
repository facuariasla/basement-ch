import React, { useState } from "react";
import styles from "../styles/Cart.module.scss";

import { useRecoilState, useRecoilValue } from "recoil";
import {
  cardCartProccesed,
  cartCardState,
  cartState,
  drawerState,
  inventoryState,
} from "../recoil";
import CardCart from "./CardCart";
import Image from "next/image";

// Este componente recibe la data del carrito
// y mapea los items como <CardCart/>

const DrawerCart = () => {
  const [cartOpen, setCartOpen] = useRecoilState(drawerState);
  const cardsArray = useRecoilValue(cardCartProccesed);

  const [cart, setCart] = useRecoilState<any>(cartState);
  const [cartCard, setCartCard] = useRecoilState<any>(cartCardState);

  const viewData = () => {
    console.log("Cards: ", cardsArray);
    console.log("Carrito: ", cart);
    console.log(Object.entries(cart))
  };

  const addItem = (id: any) => {
    setCart({ ...cart, [id]: (cart[id] || 0) + 1 });
  };

  const removeItem = (id: any) => {

    setCart({ ...cart, [id]: (cart[id] || 0) + 1 });
    const copy = { ...cart };
    const copyCards = [...cardsArray];
    if (copy[id] === 1) {
      delete copy[id];
      setCartCard(copyCards.filter((el) => el.id !== id));
      setCart(copy);
    } else {
      setCart({ ...copy, [id]: copy[id] - 1 });
    }
  };

  return (
    <div className={styles.cart}>
      <div className={styles.top_cart}>
        <div className={styles.topbtns}>
          <nav onClick={() => setCartOpen(false)}>→ CLOSE</nav>
        </div>

        <div className={styles.titles} onClick={viewData}>
          <h2>YOUR</h2>
          <h2 className={styles.subtitle}>CART</h2>
        </div>

        {/* card container */}
        <div className={styles.cards_container}>
          {cardsArray?.map((card) => (
            <div key={card.id} className={styles.item_card}>
              <div className={styles.card_img_container} onClick={viewData}>
                <div>
                  <Image src={card.src} />
                </div>
              </div>

              <div className={styles.card_data_container}>
                <div className={styles.card_subtitles_container}>
                  <h4>{card.clothename}</h4>
                  <p>{card.description}</p>
                </div>
                <div>
                  <div className={styles.card_quantity}>
                    <p>QUANTITY: </p>
                    <div>
                      <span
                        className={styles.card_quantity_btn}
                        onClick={() => removeItem(card.id)}
                      >
                        -
                      </span>
                      <p>{cart[card.id]}</p>
                      <span
                        className={styles.card_quantity_btn}
                        onClick={() => addItem(card.id)}
                      >
                        +
                      </span>
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
          ))}
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
  );
};

export default DrawerCart;
