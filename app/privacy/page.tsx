import BackButton from "@/components/BackButton"
import Main from "@/components/Main"
import PagePad from "@/components/PageLayout"
import RichText from "@/components/RichText"
import Title from "@/components/Title"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy – Empty Fasting",
}

export default function Page() {
  return (
    <Main background="grey">
      <PagePad>
        <Title>Privacy</Title>
        <RichText>
          <p>Your fast data is saved locally on your device.</p>
          <p>
            If you have iCloud sync enabled on your device, your data will be
            synced to your iCloud account.
          </p>
          <p>
            Your data is yours. We do not collect any information about your
            fasting practice. No third-party storage systems are used.
          </p>
          <p>This policy was last updated on February 22nd, 2024.</p>
        </RichText>
        <BackButton />
      </PagePad>
    </Main>
  )
}
