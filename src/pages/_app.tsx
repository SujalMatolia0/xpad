import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import "@mantine/tiptap/styles.css";
import '@mantine/core/styles.css';

import { MantineProvider, createTheme } from "@mantine/core";
import Head from "next/head";

const theme = createTheme({
  fontFamily: "Roboto",

  white: "#90A4AE",

  components: {
    Button: {
      defaultProps: {
        variant: "outline",
        color: "#263238",
        size: "md",
      },
    },

    ActionIcon: {
      defaultProps: {
        size: "xl",
        c: "#263238",
        color: "#263238",
        variant: "outline",
      },
    },

    TextInput: {
      defaultProps: {
        styles: {
          input: {
            backgroundColor: "#CFD8DC",
          },
        },
      },
    },

    RichTextEditor: {
      styles: {
        content: {
          backgroundColor: "#CFD8DC",
        },
      },
    },
  },
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>XPad</title>
        <meta name="description" content="Xpad organise your life" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <MantineProvider theme={theme}>
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
