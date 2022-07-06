import React from "react";
import Image from "next/image";

import styles from "../styles/Layout.module.scss";
import circle from "../public/assets/circle-icon.svg";
import hd from "../public/assets/hd-icon.svg";
import eye from "../public/assets/eye-icon.svg";
import fourk from "../public/assets/4k-icon.svg";
import warn from "../public/assets/warn-icon.svg";
import bicon from "../public/assets/b-icon.svg";

const Header = () => {
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
        <button className={styles.button_header}>CART (0)</button>
    </header>
  );
};

export default Header;
