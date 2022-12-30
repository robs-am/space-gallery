import React from 'react'
import Tags from '../Tags'
import styles from './Galeria.module.scss'
import fotos from './fotos.json';
import open from './open.png'
import favorito from './favorito.png'
import Cards from './Cards';


export default function Galeria() {
  return (
    <section className={styles.galeria}>
        <h2>Navegue pela galeria</h2>
        <Tags />
        <Cards />
        
    </section>
  )
}
