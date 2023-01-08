import React from "react";
import styles from "./Tags.module.scss";
import fotos from "../Galeria/fotos.json";

export default function Tags({ tags, filtraFotos, setItens }) {
  return (
    <div className={styles.tags}>
      <ul className={styles.tags__lista}>
        {tags.map((tag) => {
          return (
            <li key={tag} onClick={() => filtraFotos(tag)}>
              {tag}
            </li>
          );
        })}
        <li onClick={() => setItens(fotos)}>Todas</li>
      </ul>
    </div>
  );
}
