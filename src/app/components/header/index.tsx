"use client";
import Link from "next/link";
import styles from "./styles.module.scss";
import React from "react";

export function Header() {
  const [top, setTop] = React.useState(true);

  const scrolHandler = () => {
    window.scrollY > 10 ? setTop(false) : setTop(true);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", scrolHandler);
    return () => {
      window.removeEventListener("scroll", scrolHandler);
    };
  }, [top]);

  return (
    <header
      className={`${styles.header} ${!top ? styles.fixed : styles.background}`}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.contentLogo}>
            <Link href="/">Dev Motors</Link>
          </div>

          <nav className={styles.nav}>
            <Link href="/">HOME</Link>
            <Link href="/#servicos">SERVIÇOS</Link>
            <Link href="/#contatos">CONTATOS</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
