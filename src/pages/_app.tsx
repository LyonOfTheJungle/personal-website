import type { AppProps } from 'next/app';
import Head from "next/head";
import { createMainTheme } from '@/theme';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { SocialsButtons } from '@/components/socials';
import { Analytics } from '@vercel/analytics/react';

import '@fontsource/cascadia-mono';

const App = (props: AppProps) => {
    const { Component, pageProps } = props;

    const getLayout = Component.getLayout ?? ((page) => page);

    const theme = createMainTheme({
        colorPreset: 'green',
        contrast: 'normal',
        direction: 'ltr',
        paletteMode: 'dark'
    });

    return (
        <ThemeProvider theme={theme}>
            <Head>
                <title>
                    Lyon Momple
                </title>
                <meta
                    name="viewport"
                    content="initial-scale=1, width=device-width"
                />
                <link rel="apple-touch-icon" sizes="180x180" href="assets/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="assets/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="assets/favicon-16x16.png"/>
                <link rel="manifest" href="assets/site.webmanifest"></link>
            </Head>
            <Analytics/>
            <CssBaseline/>
            <SocialsButtons/>
            {getLayout(<Component {...pageProps}/>)}
        </ThemeProvider>
    )
};

export default App;