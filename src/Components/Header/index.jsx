import logo from "./logo2.svg";
import search from "./search.png";
import styles from "./Header.module.scss";
import Menu from "../Menu";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__top}>
        <Menu />
        <img src={logo} size={12} alt="Logo da Galeria Espacial" />
      </div>
      <div className={styles.header__container}>
        <input
          className={styles.header__input}
          type="text"
          placeholder="O que você procura?"
        />
        <img src={search} alt="ícone de lupa" />
      </div>
    </header>
  );
}
