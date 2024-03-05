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
    <Main background="grey">
      <Card>
        <div
          className={classNames(styles.cardLayout, {
            [styles.downloadActive]: downloadActive,
          })}
        >
          <div>
            {/* Desktop header */}
            <header className={styles.desktopHeader}>
              <h1 className={styles.title}>Empty</h1>
              <h2 className={styles.subtitle}>
                A beautiful and minimal companion for your intermittent fasting
                practice.
              </h2>
            </header>

            {/* Mobile header */}
            <header className={styles.mobileHeader}>
              <h1 className={styles.mobileTitle}>
                <span className="font-mono">Empty</span> is beautiful and
                minimal companion for your intermittent fasting practice.
              </h1>
            </header>

            {/* Desktop CTA */}
            <section className={styles.ctaSectionDesktop}>
              <div className={styles.appIcon}>
                <div>
                  <AppIcon size="large" tilt isActive={downloadActive} />
                </div>
              </div>
              <button
                onClick={() => setDownloadActive((prev) => !prev)}
                className={styles.desktopButton}
              >
                <div className={styles.desktopButtonInner}>
                  {downloadActive ? "Scan the QR code" : "Get the app"}
                </div>
              </button>
            </section>

            {/* Mobile CTA */}
            <section className={styles.ctaSectionMobile}>
              <a
                href="https://testflight.apple.com/join/1Ex8uyu7"
                className={styles.mobileButton}
              >
                <div>
                  <AppIcon size="small" />
                </div>
                <div>Download</div>
              </a>
            </section>
          </div>
          <div className={styles.mobileDemo}>
            <Demo />
          </div>
          <Footer />
        </div>
      </Card>
      <div className={styles.desktopDemo}>
        <Demo />
      </div>
    </Main>
  )
}
