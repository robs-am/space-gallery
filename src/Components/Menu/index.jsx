import React from "react";
import inicio from "../../assets/icones/inicio.svg"
import curtidas from "../../assets/icones/curtidas.svg"
import novas from "../../assets/icones/novas.svg"
import vistas from "../../assets/icones/vistas.svg"
import surpreenda from "../../assets/icones/surpreenda.svg"

import styles from "./Menu.module.scss"

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}>
        <li className={styles.menu__item}>
          <img src={inicio} alt="" />
          <a href="/">Home</a>
        </li>
        <li className={styles.menu__item}>
          <img src={curtidas} alt="" />
          <a href="/">Mais curtidas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={vistas} alt="" />
          <a href="/">Mais Vistas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={novas} alt="" />
          <a href="/">Novas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={surpreenda} alt="" />
          <a href="/">Surpreenda-me</a>
        </li>
      </ul>
    </nav>
  );
}
