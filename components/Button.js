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
            className ? `${styles.redButton} ${className}` : styles.redButton
          }
        >
          <button onClick={onClick}>{children}</button>
        </Ripples>
      );
    } else if (variant === "redButtonText") {
      return (
        <Ripples
          className={
            className
              ? `${styles.redButtonText} ${className}`
              : styles.redButtonText
          }
        >
          <button onClick={onClick}>{children}</button>
        </Ripples>
      );
    } else if (variant === "blackButton") {
      return (
        <Ripples
          className={
            className
              ? `${styles.blackButton} ${className}`
              : styles.blackButton
          }
          color="#ffffff40"
          during={600}
        >
          <button onClick={onClick}>{children}</button>
        </Ripples>
      );
    } else if (variant === "blackButtonText") {
      return (
        <Ripples
          className={
            className
              ? `${styles.blackButtonText} ${className}`
              : styles.blackButtonText
          }
        >
          <button onClick={onClick}>{children}</button>
        </Ripples>
      );
    } else if (variant === "redLinkButton") {
      return (
        <Ripples
          className={
            className ? `${styles.redButton} ${className}` : styles.redButton
          }
        >
          <Link href={href}>
            <a onClick={onClick} target={target}>
              {children}
            </a>
          </Link>
        </Ripples>
      );
    } else if (variant === "redLinkButtonText") {
      return (
        <Ripples
          className={
            className
              ? `${styles.redButtonText} ${className}`
              : styles.redButtonText
          }
        >
          <Link href={href}>
            <a onClick={onClick} target={target}>
              {children}
            </a>
          </Link>
        </Ripples>
      );
    } else if (variant === "linkButton") {
      return (
        <Ripples
          className={
            className ? `${styles.linkButton} ${className}` : styles.linkButton
          }
        >
          <Link href={href}>
            <a onClick={onClick} target={target}>
              {children}
            </a>
          </Link>
        </Ripples>
      );
    } else if (variant === "linkButtonText") {
      return (
        <Ripples
          className={
            className
              ? `${styles.linkButtonText} ${className}`
              : styles.linkButtonText
          }
        >
          <Link href={href}>
            <a onClick={onClick} target={target}>
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
