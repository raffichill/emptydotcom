import styles from "./styles.module.css"

interface MainProps {
  children: React.ReactNode
}

export default function Main({ children }: MainProps) {
  return (
    <main className={styles.main}>
      <div className={styles.limit}>{children}</div>
    </main>
  )
}
