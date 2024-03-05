"use client"

import classNames from "classnames"
import { useEffect, useState } from "react"
import styles from "./styles.module.css"

interface AppIconProps {
  size: "small" | "large"
  isActive?: boolean
  tilt?: boolean
}

export default function AppIcon({ isActive, tilt, size }: AppIconProps) {
  const frameCount = 18
  const speed = 400

  const width = size === "large" ? 120 : 16

  const [curFrame, setFrame] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      !isActive && setFrame((curFrame + 1) % frameCount)
    }, speed)
    return () => clearInterval(interval)
  }, [curFrame, isActive])

  // Percent to shift the background by
  const backgroundPosition = `0 -${curFrame * width}px`

  return (
    <div
      className={classNames(styles.icon, {
        [styles.iconActive]: isActive,
        [styles.tilt]: tilt,
        [styles.large]: size === "large",
        [styles.small]: size === "small",
      })}
      style={{ backgroundPosition }}
    >
      <div className={styles.qr} />
    </div>
  )
}
