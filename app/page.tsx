"use client"

import AppIcon from "@/components/AppIcon"
import Demo from "@/components/Demo"
import Footer from "@/components/Footer"
import Main from "@/components/Main"
import classNames from "classnames"
import Image from "next/image"
import { useState } from "react"
import styles from "./page.module.css"

export default function Page() {
  const [downloadActive, setDownloadActive] = useState(false)

  return (
    <Main>
      <div
        className={classNames(styles.card, {
          [styles.buttonActive]: downloadActive,
        })}
      >
        <div className={styles.cardLayout}>
          <header>
            <h1 className={styles.header}>Empty</h1>
            <p className={styles.subHeader}>
              A beautiful and minimal companion for your intermittent fasting
              practice.
            </p>
          </header>
          <section className={styles.ctaSectionDesktop}>
            <div className={styles.qr}>
              <Image
                src="/qr-code.png"
                alt="QR code"
                width={200}
                height={200}
              />
            </div>
            <div className={styles.appIcon}>
              <AppIcon />
            </div>
            <button
              onClick={() => setDownloadActive((prev) => !prev)}
              className={styles.button}
            >
              <div className={styles.buttonInner}>
                {downloadActive ? "Scan the QR code" : "Get the app"}
              </div>
            </button>
          </section>
          <section className={styles.ctaSectionMobile}>
            <a
              href="https://testflight.apple.com/join/1Ex8uyu7"
              className={styles.button}
            >
              <div className={styles.buttonInner}>Download</div>
            </a>
          </section>
          <Footer />
        </div>
      </div>
      <div className={styles.demoWrap}>
        <Demo />
      </div>
    </Main>
  )
}
