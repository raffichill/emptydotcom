import Link from "next/link"
import styles from "./styles.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <Link href="/privacy">Privacy</Link>
        </li>
        <li>
          <Link href="/terms">Terms of Use</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <a href="https://emptyfasting.notion.site/Press-Kit-for-Empty-Fasting-b2e1d3f092654d67b4d2c6724eb01700?pvs=4">
            Press Kit
          </a>
        </li>
      </ul>
    </footer>
  )
}
