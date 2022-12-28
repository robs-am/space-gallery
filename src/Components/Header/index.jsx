import logo from './logo2.svg';
import search from './search.png'
import styles from './Header.module.scss'

export default function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} size={12} alt="Logo da Galeria Espacial" />
            <div className={styles.header__container}>
                <input className={styles.header__input} type="text"
                placeholder="O que você procura?"/>
                <img src={search} alt="ícone de lupa" />
            </div>
        </header>
    )
}