"use client"

import classNames from "classnames"
import { useEffect, useState } from "react"
import styles from "./styles.module.css"

interface AppIconProps {
  isActive?: boolean
}

export default function AppIcon({ isActive }: AppIconProps) {
  const frameCount = 18
  const speed = 400

  const [curFrame, setFrame] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      !isActive && setFrame((curFrame + 1) % frameCount)
    }, speed)
    return () => clearInterval(interval)
  }, [curFrame, isActive])

  const backgroundPosition = `0 -${curFrame * 120}px`

  return (
    <div
      className={classNames(styles.icon, { [styles.iconActive]: isActive })}
      style={{ backgroundPosition }}
    >
      <div className={styles.qr} />
    </div>
  )
}
