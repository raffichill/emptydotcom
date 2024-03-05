"use client"

import AppIcon from "@/components/AppIcon"
import Card from "@/components/Card"
import Demo from "@/components/Demo"
import Footer from "@/components/Footer"
import Main from "@/components/Main"
import classNames from "classnames"
import { useState } from "react"
import styles from "./page.module.css"

export default function Page() {
  const [downloadActive, setDownloadActive] = useState(false)
  return (
    <Main>
      <Card>
        <div
          className={classNames(styles.cardLayout, {
            [styles.buttonActive]: downloadActive,
          })}
        >
          <div>
            <header>
              <h1 className={styles.header}>Empty</h1>
              <h2 className={styles.subHeader}>
                A beautiful and minimal companion for your intermittent fasting
                practice.
              </h2>
            </header>
            <section className={styles.ctaSectionDesktop}>
              <div className={styles.appIcon}>
                <div>
                  <AppIcon isActive={downloadActive} />
                </div>
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
          </div>
          <Footer />
        </div>
      </Card>
      <div className={styles.demo}>
        <Demo />
      </div>
    </Main>
  )
}
