import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Header } from "../components/Header";
import { GlobalStyles } from "../styles/globals";
import { defaultTheme } from "../styles/theme/defaultTheme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
