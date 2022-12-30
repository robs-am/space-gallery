import React from "react";
import inicio2 from "../../assets/icones/inicio2.svg"
import curtidas2 from "../../assets/icones/curtidas2.svg"
import novas2 from "../../assets/icones/novas2.svg"
import vistas2 from "../../assets/icones/vistas2.svg"
import surpreenda2 from "../../assets/icones/surpreenda2.svg"


import styles from "./Menu.module.scss"


export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}>
        <li className={styles.menu__item}>
          <img src={inicio2}  alt="" />
          <a href="/">Home</a>
        </li>
        <li className={styles.menu__item}>
          <img src={curtidas2} alt="" />
          <a href="/">Mais curtidas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={vistas2} alt="" />
          <a href="/">Mais Vistas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={novas2} alt="" />
          <a href="/">Novas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={surpreenda2} alt="" />
          <a href="/">Surpreenda-me</a>
        </li>
      </ul>
    </nav>
  );
}
