import classNames from "classnames"
import styles from "./styles.module.css"

interface MainProps {
  children: React.ReactNode
  background: "grey" | "white"
}

export default function Main({ children, background }: MainProps) {
  return (
    <main
      className={classNames(["font-sans", styles.main], {
        [styles.grey]: background === "grey",
      })}
    >
      {children}
    </main>
  )
}
