import React from 'react'
import Tags from '../Tags'
import styles from './Galeria.module.scss'
import fotos from './fotos.json';


export default function Galeria() {
  return (
    <section className={styles.galeria}>
        <h2>Navegue pela galeria</h2>
        <Tags />
        <ul className={styles.galeria__lista}>
          {fotos.map((foto)=>{
            return (
              <li key={foto.id} className={styles.galeria__card}>
                <img
                  className={styles.galeria__image}
                  src={foto.imagem}
                  alt={foto.titulo}
                  />
                <p className={styles.galeria__descricao}>{foto.titulo}</p>
                <div>
                  <p>{foto.creditos}</p>
                  <span>
                    <img src="" alt="icone coração curtir" />
                    <img src="" alt="icone abrir modal" />
                  </span>
                </div>
              </li>
            )
          })}
        </ul>
    </section>
  )
}
