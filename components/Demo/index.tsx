"use client"

import classNames from "classnames"
import { useState } from "react"
import styles from "./styles.module.css"

export default function Demo() {
  const [isLoaded, setIsLoaded] = useState(false)
  return (
    <div className={classNames(styles.demo)}>
      <video autoPlay playsInline muted loop className={styles.demoVideo}>
        <source src="/demo.mp4" type="video/mp4" />
      </video>
    </div>
  )
}
