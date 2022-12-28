import React from "react";
import inicio from "../../assets/icones/inicio.svg"
import curtidas from "../../assets/icones/curtidas.svg"
import novas from "../../assets/icones/novas.svg"
import vistas from "../../assets/icones/vistas.svg"
import surpreenda from "../../assets/icones/surpreenda.svg"

export default function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <img src={inicio} alt="" />
          <a href="/">Home</a>
        </li>
        <li>
          <img src={curtidas} alt="" />
          <a href="/">Mais curtidas</a>
        </li>
        <li>
          <img src={vistas} alt="" />
          <a href="/">Mais Vistas</a>
        </li>
        <li>
          <img src={novas} alt="" />
          <a href="/">Novas</a>
        </li>
        <li>
          <img src={surpreenda} alt="" />
          <a href="/">Surpreenda-me</a>
        </li>
      </ul>
    </nav>
  );
}
