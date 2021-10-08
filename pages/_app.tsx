import React, { createContext } from "react";
import PropTypes from "prop-types";
import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { NextPage } from "next";
import { get } from "lodash-es";
import theme from "../constants/theme";
import "../styles/globals.css";
import { fetchAPI, getStrapiURL } from "../lib/api";
import { getStrapiMedia } from "../lib/media";
// Store Strapi Global object in context
export const GlobalContext = createContext({});
type Props = Record<string, any>;
const MyApp: NextPage<Props> = (props: any) => {
  const { Component, pageProps } = props;
  const { global = {} } = pageProps;
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      if (jssStyles.parentElement) {
        jssStyles.parentElement.removeChild(jssStyles);
      }
    }
  }, []);
  const favicon = get(global, "profile.favicon", {});

  return (
    <>
      <Head>
        <link rel="shortcut icon" href={getStrapiMedia(favicon)} />
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalContext.Provider value={global}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </GlobalContext.Provider>
      </ThemeProvider>
    </>
  );
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};
// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx: any) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const global = await fetchAPI("/vikram-resume");
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global } };
};

export default MyApp;
