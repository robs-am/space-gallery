import Menu from "../../Components/Menu";
import Header from "./../../Components/Header/index";

import Banner from "./Banner.png"

import styles from "./Homepage.module.scss";

export default function Homepage() {
  return (
    <>
      <Header />
      <main>
        <section>
          <Menu />
          <div>
            <h1>galeria</h1>
            <img src={Banner} alt="Imagem de cristais em um planeta AI" />
          </div>
        </section>
      </main>
    </>
  );
}
