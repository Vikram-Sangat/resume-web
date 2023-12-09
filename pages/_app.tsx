import React, { createContext } from "react";
import PropTypes from "prop-types";
import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@mui/styles";
import { CssBaseline } from '@mui/material';
import { NextPage } from "next";
import { get } from "lodash-es";
import theme from "../constants/theme";
import "../styles/globals.css";

type Props = Record<string, any>;
const MyApp: NextPage<Props> = (props: any) => {
  const { Component, pageProps } = props;
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      if (jssStyles.parentElement) {
        jssStyles.parentElement.removeChild(jssStyles);
      }
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default MyApp;
