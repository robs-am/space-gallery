
import Header from "./../../Components/Header/index";

import Banner from "./Banner.png"

import styles from "./Homepage.module.scss";

export default function Homepage() {
  return (
    <>
      <Header />
      <main>
        <section  className={styles.principal}>
         
          <div className={styles.principal__imagem}>
            <h1 className={styles.principal__h1}>Explore a galeria  gerada por Inteligência Artifical</h1>
            <img src={Banner} alt="Imagem de cristais em um planeta AI" />
          </div>
        </section>
      </main>
    </>
  );
}
