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
          <a href="https://notion.so">Press Kit</a>
        </li>
      </ul>
    </footer>
  )
}
