import Galeria from "../../Components/Galeria";
import Populares from "../../Components/Galeria/Populares";
/* import Menu from "../../Components/Menu"; */
import Header from "./../../Components/Header/index";

import Banner2 from "./Banner2.png";

import styles from "./Homepage.module.scss";

export default function Homepage() {
  return (
    <>
      <Header />

      <main>
        <section className={styles.principal}>
          {/* <Menu /> */}
          <div className={styles.principal__imagem}>
            <h1 className={styles.principal__h1}>
              Explore imagens geradas por IA
            </h1>
            <img
              className={styles.banner}
              src={Banner2}
              alt="Imagem de cristais em um planeta AI"
            />
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
