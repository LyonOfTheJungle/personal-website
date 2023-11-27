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
            </Head>
            <Analytics/>
            <CssBaseline/>
            <SocialsButtons/>
            {getLayout(<Component {...pageProps}/>)}
        </ThemeProvider>
    )
};

export default App;