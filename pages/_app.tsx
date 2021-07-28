import "tailwindcss/tailwind.css";
import "../styles/global.css";
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
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        noModule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </>
  );
}

export default MyApp;
