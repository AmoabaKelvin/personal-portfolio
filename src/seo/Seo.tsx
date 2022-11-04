import { NextSeo } from "next-seo";
import Head from "next/head";

const Seo = () => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="software engineer based in Accra, Ghana. I'm passionate about building products that solve real world problems."
      />
      <meta
        name="keywords"
        content="Portfolio, Full Stack Developer, Software Developer"
      />
      <meta name="author" content="Kelvin Amoaba" />
      <link rel="icon" href="/favicon/favicon.ico" />
    </Head>
    <NextSeo
      title="Kelvin Amoaba"
      description="software engineer based in Accra, Ghana. I'm passionate about building products that solve real world problems."
      canonical="https://www.kelvinamoaba.me"
      openGraph={{
        url: "https://www.kelvinamoaba.me",
        title: "Kelvin Amoaba",
        description:
          "software engineer based in Accra, Ghana. I'm passionate about building products that solve real world problems.",
        images: [
          {
            url: "https://www.example.com/og-image01.jpg",
            width: 800,
            height: 600,
            alt: "Og Image Alt",
            type: "image/jpeg",
          },
          {
            url: "https://www.example.com/og-image02.jpg",
            width: 900,
            height: 800,
            alt: "Og Image Alt Second",
            type: "image/jpeg",
          },
          { url: "https://www.example.com/og-image03.jpg" },
          { url: "https://www.example.com/og-image04.jpg" },
        ],
        site_name: "YourSiteName",
      }}
      twitter={{
        handle: "@kelamoaba",
        site: "@kelamoaba.me",
        cardType: "summary_large_image",
      }}
    />
  </>
);

export default Seo;
