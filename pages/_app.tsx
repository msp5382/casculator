import "tailwindcss/tailwind.css";
import "../styles/global.css";
import Script from "next/script"
import type { AppProps } from 'next/app'

import * as React from 'react'

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    custom?: string;
    src?: string,
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ion-icon": any,
    }
  }
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
      <Script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></Script>
      <Script
        noModule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></Script>
    </>
  );
}

export default MyApp;
