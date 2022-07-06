import Image from "next/image";
import React from "react";
import styles from "../styles/HomeClothes.module.scss";
// import circlesfooter from '../public/assets/vectorfooter.png'
import circlesfooter from "../public/assets/vectorfooter.png";

const Footer = () => {
  return (
    <div>
      <div className={styles.footer_container}>
        <div className={styles.title1_container}>
          <div className={styles.foot_img}>
            <Image
              src={circlesfooter}
              width={240}
              objectFit="contain"
            />
          </div>
          <h2 className={styles.title_footer}>WEAR</h2>
        </div>
        <h2 className={styles.subtitle_footer}>EVERYDAY</h2>
      </div>
    </div>
  );
};

export default Footer;
