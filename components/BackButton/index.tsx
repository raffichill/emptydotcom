import Link from "next/link"
import styles from "./styles.module.css"

export default function BackButton() {
  return (
    <Link href="/" className={styles.button}>
      Back
    </Link>
  )
}
