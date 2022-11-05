import { NextSeo } from "next-seo";
import Head from "next/head";

const Seo = () => (
  <>
    <Head>
      <title>Kelvin Amoaba - Portfolio</title>
      <meta name="title" content="Kelvin Amoaba" />
      {/* Add favicon */}
      <link rel="icon" href="/favicon/favicon.ico" />
      <meta
        name="description"
        content="Full-stack Software Engineer with passion for building beautiful and fully functional web applications."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.kelvinamoaba.me/" />
      <meta property="og:title" content="Kelvin Amoaba - Portfolio" />
      <meta
        property="og:description"
        content="Full-stack Software Engineer with passion for building beautiful and fully functional web applications."
      />
      <meta property="og:image" content="/images/portfolio/portfolio.png" />

      <meta property="twitter:card" content="summary" />
      <meta property="twitter:url" content="https://www.kelvinamoaba.me/" />
      <meta property="twitter:title" content="Kelvin Amoaba - Portfolio" />
      <meta
        property="twitter:description"
        content="Portfolio of Kelvin Amoaba, fullstack software engineer."
      />
    </Head>
  </>
);

export default Seo;
