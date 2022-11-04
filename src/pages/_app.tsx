import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Seo from "../seo/Seo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      <Seo />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
