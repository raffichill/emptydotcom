"use client"

import { useEffect, useState } from "react"
import styles from "./styles.module.css"

export default function AppIcon() {
  const frameCount = 18
  const speed = 400

  const [curFrame, setFrame] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((curFrame + 1) % frameCount)
    }, speed)
    return () => clearInterval(interval)
  }, [curFrame])

  const backgroundPosition = `0 -${curFrame * 100}px`

  return <div className={styles.icon} style={{ backgroundPosition }}></div>
}
