import "../styles/globals.css";
import "../styles/slider.css";
import"../styles/popup.css";
import '../styles/footer.css';
import type { AppProps } from "next/app";
import Router from "next/router";
import {UserProvider} from '@auth0/nextjs-auth0'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import NextNProgress from "nextjs-progressbar";
function MyApp({ Component, pageProps }: AppProps) {
  return (
  <UserProvider>
    <NextNProgress
  color="blue"
  startPosition={0.3}
  stopDelayMs={200}
  height={3}
  showOnShallow={true}
/>
    <Component {...pageProps} />
    </UserProvider>)
}

export default MyApp;
