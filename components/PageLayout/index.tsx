import styles from "./styles.module.css"

interface PageLayoutProps {
  children: React.ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  return <div className={styles.pageWrap}>{children}</div>
}
