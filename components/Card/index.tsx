import styles from "./styles.module.css"

interface CardProps {
  children: React.ReactNode
}

export default function Card({ children }: CardProps) {
  return (
    <div className={styles.cardWrap}>
      <div className={styles.card}>{children}</div>
    </div>
  )
}
