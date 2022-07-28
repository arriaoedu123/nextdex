import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.logo}>
          <Image
            src="/images/pokeball.png"
            width={30}
            height={30}
            alt="NextDex"
          />
        </li>
        <li className={styles.logoName}>
          <h1>
            Next<span>Dex</span>
          </h1>
        </li>
      </ul>
      <ul className={styles.links}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>Sobre</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
