import "../styles/globals.css";
import "../styles/slider.css";
import"../styles/popup.css";
import type { AppProps } from "next/app";
import Router from "next/router";
import {UserProvider} from '@auth0/nextjs-auth0'
import NextNProgress from "nextjs-progressbar";
function MyApp({ Component, pageProps }: AppProps) {
  Router.events.on('routeChangeStart',()=>{
  console.log('sd');
  
  })
Router.events.on('routeChangeComplete',()=>{
  console.log('on Complete');
  
})
Router.events.on('routeChangeError',()=>{
  console.log('on error');
})
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
