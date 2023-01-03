import React from 'react'
import search from "./search.png";
import styles from './../Header.module.scss'


export default function SearchBar() {
  return (
    <div className={styles.header__container}>
    <input
      className={styles.header__input}
      type="text"
      placeholder="O que você procura?"
    />
    <img src={search} alt="ícone de lupa" />
  </div>
  )
}
