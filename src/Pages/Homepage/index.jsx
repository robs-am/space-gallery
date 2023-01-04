import Galeria from "../../Components/Galeria";
import Populares from "../../Components/Galeria/Populares";
import Menu from "../../Components/Menu";
import Header from "./../../Components/Header/index";

import Banner from "./Banner.png";

import styles from "./Homepage.module.scss";

export default function Homepage() {
  return (
    <>
      <Header />

      <main>
        <section className={styles.principal}>
          <Menu />
          <div className={styles.principal__imagem}>
            <h1 className={styles.principal__h1}>
              Explore a galeria gerada por IA
            </h1>
            <img src={Banner} alt="Imagem de cristais em um planeta AI" />
          </div>
        </section>
        <div className={styles.galeria}>
          <Galeria />
          <Populares />
        </div>
      </main>
    </>
  );
}
