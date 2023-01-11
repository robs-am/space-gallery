import React from "react";
import inicio2 from "../../assets/icones/inicio2.svg";
import curtidas2 from "../../assets/icones/curtidas2.svg";
import novas2 from "../../assets/icones/novas2.svg";
import vistas2 from "../../assets/icones/vistas2.svg";

import styles from "./Menu.module.scss";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

export default function Menu() {
  const [Mobile, setMobile] = useState(false);

  return (
    <nav className={styles.menu}>
      <ul
        className={
          /* Mobile ? "styles.menu_mobile" : "styles.menu" */ styles.menu__lista
        }
      >
        <li className={styles.menu__item}>
          <img src={inicio2} alt="" />
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
        <button className={styles.btn_mobile}>Menu</button>
      </ul>
    </nav>
  );
}
