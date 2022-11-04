import Layout from "../components/Layout";
import Introduction from "../components/UI/Introduction";
import Skills from "../components/UI/Skills";
import Projects from "../components/UI/Projects";
import Head from "next/head";
import Contact from "../components/UI/Contact";
import Seo from "../seo/Seo";

export default function Home() {
  return (
    <Layout>
      <Seo />
      <Introduction />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
}
