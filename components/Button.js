import Ripples from "react-ripples";
import Link from "next/link";

import styles from "../styles/Button.module.css";

export default function Button({
  variant,
  children,
  href,
  target,
  className,
  onClick,
}) {
  {
    if (variant === "redButton") {
      return (
        <Ripples
          className={
            className
              ? `${styles.buttonRipple} ${className}`
              : styles.buttonRipple
          }
        >
          <button className={styles.redButton} onClick={onClick}>
            {children}
          </button>
        </Ripples>
      );
    } else if (variant === "redButtonText") {
      return (
        <Ripples
          className={
            className
              ? `${styles.buttonTextRipple} ${className}`
              : styles.buttonTextRipple
          }
        >
          <button className={styles.redButtonText} onClick={onClick}>
            {children}
          </button>
        </Ripples>
      );
    } else if (variant === "blackButton") {
      return (
        <Ripples
          className={
            className
              ? `${styles.buttonRipple} ${className}`
              : styles.buttonRipple
          }
          color="#ffffff40"
          during={600}
        >
          <button className={styles.blackButton} onClick={onClick}>
            {children}
          </button>
        </Ripples>
      );
    } else if (variant === "blackButtonText") {
      return (
        <Ripples className={className}>
          <button className={styles.blackButtonText} onClick={onClick}>
            {children}
          </button>
        </Ripples>
      );
    } else if (variant === "redLinkButton") {
      return (
        <Ripples
          className={
            className
              ? `${styles.buttonRipple} ${className}`
              : styles.buttonRipple
          }
        >
          <Link href={href}>
            <a className={styles.redButton} onClick={onClick} target={target}>
              {children}
            </a>
          </Link>
        </Ripples>
      );
    } else if (variant === "redLinkButtonText") {
      return (
        <Ripples className={className}>
          <Link href={href}>
            <a
              className={styles.redButtonText}
              onClick={onClick}
              target={target}
            >
              {children}
            </a>
          </Link>
        </Ripples>
      );
    } else if (variant === "linkButton") {
      return (
        <Ripples
          className={
            className
              ? `${styles.buttonRipple} ${className}`
              : styles.buttonRipple
          }
        >
          <Link href={href}>
            <a className={styles.linkButton} onClick={onClick} target={target}>
              {children}
            </a>
          </Link>
        </Ripples>
      );
    } else if (variant === "linkButtonText") {
      return (
        <Ripples className={className}>
          <Link href={href}>
            <a
              className={styles.linkButtonText}
              onClick={onClick}
              target={target}
            >
              {children}
            </a>
          </Link>
        </Ripples>
      );
    } else {
      return null;
    }
  }
}
