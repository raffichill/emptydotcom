"use client"

import { emptySpring } from "@/helpers/animations"
import classNames from "classnames"
import { motion } from "framer-motion"
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

  const iconVariants = {
    active: { scale: 1.25, rotate: 0 },
    inactive: { scale: 1, rotate: tilt ? -3 : 0 },
  }

  return (
    <motion.div
      className={classNames(styles.icon, {
        [styles.large]: size === "large",
        [styles.small]: size === "small",
      })}
      style={{ backgroundPosition }}
      animate={isActive ? "active" : "inactive"}
      variants={iconVariants}
      transition={emptySpring}
    >
      <motion.div
        className={styles.qr}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.15 }}
      />
    </motion.div>
  )
}
