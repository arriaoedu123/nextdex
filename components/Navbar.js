import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import "@fontsource/press-start-2p";
import styles from "../styles/Navbar.module.css";

const MENU_ITEMS = [
  {
    name: "Início",
    href: "/",
  },
  {
    name: "Sobre",
    href: "/about",
  },
];

export default function Navbar() {
  const router = useRouter();
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const scrollTop = window.scrollY;
    document.body.style.overflowY = navOpen ? "hidden" : "auto";
    document.getElementById("links").style.top = `${60 - scrollTop}px`;
  }, [navOpen]);

  const handleNav = (e) => {
    e.preventDefault();
    !navOpen ? setNavOpen(true) : setNavOpen(false);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setNavOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <ul>
        <Link href="/">
          <a className={styles.logoLink}>
            <li className={styles.logo}>
              <Image
                src="/images/pokeball.svg"
                width={32}
                height={32}
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
      <div className={styles.menuButton} onClick={handleNav}>
        <span
          className={`${
            !navOpen ? styles.hamburguer : styles.activeHamburguer
          }`}
        ></span>
      </div>
      <ul
        id="links"
        className={`${styles.links} ${navOpen ? styles.linksActive : null}`}
      >
        {MENU_ITEMS.map((item) => (
          <li key={item.name.toLowerCase()}>
            <div onClick={handleClose}>
              <Link href={item.href}>
                <a>{item.name}</a>
              </Link>
              <span
                className={
                  router.pathname === `${item.href}`
                    ? styles.navActive
                    : styles.navDisabled
                }
              ></span>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}
