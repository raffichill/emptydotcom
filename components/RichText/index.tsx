import styles from "./styles.module.css"

interface RichTextProps {
  children: React.ReactNode
}

export default function RichText({ children }: RichTextProps) {
  return <div className={styles.richText}>{children}</div>
}
