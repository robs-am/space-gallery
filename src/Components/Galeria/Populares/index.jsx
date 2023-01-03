import React from "react";
import styles from "./Populares.module.scss"
import fotosPopulares from "./fotos-populares.json";

export default function Populares() {
  return (
    <asided className={styles.populares}>
      <h2>Populares</h2>
      <p>teste</p>
      <ul className={styles.populares__imagens}></ul>
    </asided>
  );
}
