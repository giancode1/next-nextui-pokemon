import type { AppProps } from 'next/app';

import { NextUIProvider } from '@nextui-org/react';
//archivo creado por mi
import { darkTheme, lightTheme } from '../themes'; 

import '../styles/globals.css';
import useDarkMode from 'use-dark-mode';

function MyApp({ Component, pageProps }: AppProps) {
  const darkMode = useDarkMode(true);
  return (
    // 2. Use at the root of your app
    <NextUIProvider theme={ darkMode.value ? darkTheme : lightTheme }>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
