import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";

import analytics from "@/libs/firebase/analytics";

import theme from "../theme";
import "@/styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    analytics();
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Bechke</title>

        <link rel="manifest" href="/manifest.json" />
        <link href="/favicon.ico" rel="icon" type="image/ico" sizes="16x16" />
        <link
          href="/pwa-icons/32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/32x32.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>

      <ChakraProvider resetCSS theme={theme}>
        <ColorModeProvider
          options={{
            useSystemColorMode: true,
          }}
        >
          <Component {...pageProps} />
        </ColorModeProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
