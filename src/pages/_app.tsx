// pages/_app.tsx
import { AppProps } from 'next/app';
import '../../styles/global.css'; // Import the global styles

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;