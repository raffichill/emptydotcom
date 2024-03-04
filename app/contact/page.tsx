import Main from "@/components/Main"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact – Empty Fasting",
}

export default function Page() {
  return (
    <Main>
      <section>
        <p>
          Get in touch with us via{" "}
          <a href="https://www.twitter.com/raffichill/">Twitter DM </a>{" "}
          (preferred) or <a href="mailto:raffi@steddy.health">email</a>.
        </p>
        <p>
          We always respond as quickly as possible (usually within a few hours).
        </p>
      </section>
    </Main>
  )
}
