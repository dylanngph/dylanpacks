import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/providers/theme-provider";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}
