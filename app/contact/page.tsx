import BackButton from "@/components/BackButton"
import Main from "@/components/Main"
import PagePad from "@/components/PageLayout"
import RichText from "@/components/RichText"
import Title from "@/components/Title"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact – Empty Fasting",
}

export default function Page() {
  return (
    <Main background="white">
      <PagePad>
        <Title>Contact Us</Title>
        <RichText>
          <p>
            Get in touch with us via{" "}
            <a href="https://www.twitter.com/raffichill/">Twitter DM </a>{" "}
            (preferred) or <a href="mailto:raffi@steddy.health">email</a>.
          </p>
          <p>
            We always respond as quickly as possible (usually within a few
            hours).
          </p>
        </RichText>
        <BackButton />
      </PagePad>
    </Main>
  )
}
