
import { useEffect } from 'react';
import { AppProps } from 'next/app';
import '../app/globals.css';


declare global {
  interface Window {
    Alpine: any; 
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import('alpinejs').then((Alpine) => {
      window.Alpine = Alpine.default;
      window.Alpine.start();
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
