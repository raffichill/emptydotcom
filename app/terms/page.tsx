import BackButton from "@/components/BackButton"
import Main from "@/components/Main"
import PagePad from "@/components/PageLayout"
import RichText from "@/components/RichText"
import Title from "@/components/Title"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Use – Empty Fasting",
}

export default function Page() {
  return (
    <Main background="grey">
      <PagePad>
        <Title>Terms of Use</Title>
        <RichText>
          <p>We use Apple&apos;s standard End User License Agreement (EULA).</p>
          <p>The EULA can be found here:</p>
          <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">
            EULA
          </a>
          <p>
            In addition to Apple&apos;s End User License Agreement we add that
            users of our product are fully responsible for the health outcomes
            associated with their intermittent fasting practice and use of our
            app. We are app developers, not medical professionals.
          </p>
        </RichText>
        <BackButton />
      </PagePad>
    </Main>
  )
}
