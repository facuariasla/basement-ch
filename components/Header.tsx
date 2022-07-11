import React, { useState } from "react";
import Image from "next/image";

import styles from "../styles/Layout.module.scss";
import circle from "../public/assets/circle-icon.svg";
import hd from "../public/assets/hd-icon.svg";
import eye from "../public/assets/eye-icon.svg";
import fourk from "../public/assets/4k-icon.svg";
import warn from "../public/assets/warn-icon.svg";
import bicon from "../public/assets/b-icon.svg";
import DrawerCart from "./DrawerCart";

import { useRecoilState } from "recoil";
import { drawerState } from "../recoil";

const Header = () => {
  const [cartOpen, setCartOpen] = useRecoilState(drawerState);

  return (
    <header className={styles.header}>
        <div>
          <a href="https://basement.studio/" target='_blank' className={styles.baselogo}>basement</a>
          <a href="https://basement.studio/" target='_blank' className={styles.b_icon}>
            <Image src={bicon} height={60} width={60}/>
          </a>
        </div>
        <nav className={styles.icons}>
          <Image src={circle} />
          <Image src={hd} />
          <Image src={eye} />
          <Image src={fourk} />
          <Image src={warn} />
        </nav>
        {cartOpen && <DrawerCart/>}
        <button className={styles.button_header} onClick={()=>setCartOpen(true)}>CART (0)</button>
    </header>
  );
};

export default Header;
