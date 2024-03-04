"use client"

import AppIcon from "@/components/AppIcon"
import Demo from "@/components/Demo"
import Footer from "@/components/Footer"
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
      <div
        className={classNames(styles.flex, {
          [styles.buttonActive]: downloadActive,
        })}
      >
        <header>
          <h1 className={styles.header}>
            <span className="font-mono">Empty</span> is a beautiful and minimal
            companion for your intermittent fasting practice.
          </h1>
        </header>
        <section className={styles.ctaSection}>
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
                width={200}
                height={200}
              />
            </div>
          </div>
        </section>
        <section className={styles.ctaSectionMobile}>
          <a
            href="https://testflight.apple.com/join/1Ex8uyu7"
            className={styles.button}
          >
            <div className={styles.buttonInner}>Download</div>
          </a>
        </section>
        <section className={styles.demoSection}>
          <Demo />
        </section>
        <section className={styles.testimonialsSection}>
          <Testimonials />
        </section>
        <section className={styles.appIconSection}>
          <AppIcon />
        </section>
        <Footer />
      </div>
    </Main>
  )
}
