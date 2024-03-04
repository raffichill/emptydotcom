"use client"

import AppIcon from "@/components/AppIcon"
import Demo from "@/components/Demo"
import Main from "@/components/Main"
import Testimonials from "@/components/Testimonials"
import classNames from "classnames"
import Image from "next/image"
import { useState } from "react"
import styles from "./page.module.css"

export default function Page() {
  const [downloadActive, setDownloadActive] = useState(false)

  return (
    <Main>
      <section
        className={classNames(styles.flex, {
          [styles.buttonActive]: downloadActive,
        })}
      >
        <h1 className={styles.header}>
          <strong>Empty</strong> is a beautiful and minimal companion for your
          intermittent fasting practice.
        </h1>
        <div className={styles.ctaSection}>
          <button
            onClick={() => setDownloadActive((prev) => !prev)}
            className={styles.button}
          >
            <div className={styles.buttonInner}>
              {downloadActive ? "Scan the QR code" : "Download"}
            </div>
          </button>
          <div className={styles.qrSection}>
            <div className={styles.qr}>
              <Image
                src="/qr-code.png"
                alt="QR code"
                width={160}
                height={160}
              />
            </div>
          </div>
        </div>
        <div className={styles.ctaSectionMobile}>
          <a
            href="https://testflight.apple.com/join/1Ex8uyu7"
            className={styles.button}
          >
            <div className={styles.buttonInner}>Download</div>
          </a>
        </div>
        <div className={styles.demoSection}>
          <Demo />
        </div>
        <div className={styles.testimonialsSection}>
          <Testimonials />
        </div>
        <div className={styles.appIconSection}>
          <AppIcon />
        </div>
      </section>
    </Main>
  )
}
