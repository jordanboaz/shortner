import Head from "next/head";
import { CardList, CTA, Button, Footer, Shortner, Header } from "../components";

import { Container, Content } from "../styles/Home/styles";
import { features } from "../values/features";
import { resources, social } from "../values/resources";

export default function Home() {
  return (
    <>
      <Head>Shortly</Head>
      <Header />
      <Container>
        <section>
          <h1>More than just shorter links</h1>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing
          </p>

          <Button type="button" onClick={() => {}}>
            Get Started
          </Button>
        </section>
        <img src="/images/illustration-working.svg" alt="girl-coding" />
      </Container>
      <Content>
        <Shortner />
        <h1>Advanced Statistics</h1>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <CardList list={features} />
      </Content>
      <CTA
        title="Boost your links today"
        buttonText="Get Started"
        onClick={() => {}}
      />

      <Footer config={resources} social={social} />
    </>
  );
}
