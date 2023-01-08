import logo from "./logo2.svg";
import styles from "./Header.module.scss";
/* import SearchBar from "./SearchBar"; */
import Menu from "../Menu";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} size={12} alt="Logo da Galeria Espacial" />
      <Menu />
      {/*  <SearchBar /> */}
    </header>
  );
}
