import Image from "next/image";
import Button from "../components/Button";

import styles from "../styles/Error.module.css";

export default function errorPage() {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.image}>
        <Image src="/images/error.png" layout="fill" alt="Psyduck" />
      </div>
      <div className={styles.description}>
        <h2>Oops!</h2>
        <p>Algo deu errado, clique no botão abaixo e tente novamente</p>
      </div>
      <Button variant="redLinkButton" href="/">
        Voltar para página principal
      </Button>
    </div>
  );
}
