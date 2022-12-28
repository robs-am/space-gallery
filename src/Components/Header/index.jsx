import logo from './logo2.svg';
import search from './search.png'


export default function Header() {
    return (
        <header>
            <img src={logo} size={12} alt="Logo da Galeria Espacial" />
            <div>
                <input type="text"
                placeholder="O que você procura?"/>
                <img src={search} alt="ícone de lupa" />
            </div>
        </header>
    )
}