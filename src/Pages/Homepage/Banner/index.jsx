import React from "react";
import styles from "./Banner.module.scss";
import Banner2 from "./Banner2.png";

export default function Banner() {
  return (
    <section className={styles.principal}>
      {/* <Menu /> */}
      <div className={styles.principal__imagem}>
        <h1 className={styles.principal__h1}>Explore imagens geradas por IA</h1>
        <img
          className={styles.banner}
          src={Banner2}
          alt="Imagem de cristais em um planeta AI"
        />
      </div>
    </section>
  );
}
