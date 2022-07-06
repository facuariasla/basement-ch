import React from "react";
import Image from "next/image";

import styles from "../styles/Layout.module.scss";
import circle from "../public/assets/circle-icon.svg";
import hd from "../public/assets/hd-icon.svg";
import eye from "../public/assets/eye-icon.svg";
import fourk from "../public/assets/4k-icon.svg";
import warn from "../public/assets/warn-icon.svg";

const Header = () => {
  return (
    <header className={styles.header}>
        <div >
          <nav>basement</nav>
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
