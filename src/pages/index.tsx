import Layout from "../components/Layout";
import Introduction from "../components/UI/Introduction";
import Skills from "../components/UI/Skills";
import Projects from "../components/UI/Projects";
import Head from "next/head";
import Contact from "../components/UI/Contact";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Kelvin Amoaba</title>
        <meta
          name="description"
          content="I'm a software engineer based in Accra, Ghana. I'm passionate about building products that solve real world problems."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Introduction />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
}
