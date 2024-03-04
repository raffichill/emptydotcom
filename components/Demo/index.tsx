"use client"

import Image from "next/image"
import styles from "./styles.module.css"

export default function Demo() {
  return (
    <div className={styles.demo}>
      <Image
        className={styles.demoDevice}
        src="/iphone.png"
        alt=""
        width={946}
        height={1864}
      />
      <video autoPlay playsInline muted loop className={styles.demoVideo}>
        <source src="/demo.mp4" type="video/mp4" />
      </video>
    </div>
  )
}
