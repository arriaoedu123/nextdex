import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import "@fontsource/press-start-2p";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <ul>
        <Link href="/">
          <a className={styles.logoLink}>
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
          </a>
        </Link>
      </ul>
      <ul className={styles.links}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
          <span
            className={
              router.pathname === "/" ? styles.navActive : styles.navDisabled
            }
          ></span>
        </li>
        <li>
          <Link href="/about">
            <a>Sobre</a>
          </Link>
          <span
            className={
              router.pathname === "/about"
                ? styles.navActive
                : styles.navDisabled
            }
          ></span>
        </li>
      </ul>
    </nav>
  );
}
