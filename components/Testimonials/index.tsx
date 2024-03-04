"use client"

import { useEffect, useState } from "react"
import styles from "./styles.module.css"
import testimonials from "./testimonials"

export default function Testimonials() {
  const [curIndex, setCurIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurIndex((prev) => (prev + 1) % testimonials.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.testimonials}>
      <ul>
        <li>&ldquo;{testimonials[0]}&rdquo;</li>
        <li className={styles.current}>&ldquo;{testimonials[1]}&rdquo;</li>
        <li>&ldquo;{testimonials[2]}&rdquo;</li>
      </ul>
    </div>
  )
}
