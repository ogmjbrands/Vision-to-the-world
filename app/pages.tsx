import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StickyBookingButton from '../components/StickyBookingButton';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Vision to the World | Luxury & Adventure Travel Agency</title>
        <meta name="description" content="Discover premium tours, real-time bookings, and world-class travel experiences with Vision to the World. Multi-currency, instant support, and the best deals for luxury & adventure seekers." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="luxury travel, adventure tours, book flights, book hotels, vacation packages, travel agency, Buffalo NY, global travel" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <StickyBookingButton />
      <Footer />
      {/* TODO: Add analytics scripts, live chat widget (e.g., Crisp, Intercom, Tawk.to) */}
    </>
  );
}
