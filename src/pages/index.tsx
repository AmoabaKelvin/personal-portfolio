import Layout from "../components/Layout";
import Introduction from "../components/UI/Introduction";
import Skills from "../components/UI/Skills";
import Projects from "../components/UI/Projects";
import Contact from "../components/UI/Contact";

export default function Home() {
  return (
    <Layout>
      {/* <Seo /> */}
      <Introduction />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
}
