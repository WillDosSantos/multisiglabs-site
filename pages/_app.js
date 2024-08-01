// pages/_app.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Inter } from 'next/font/google'

import 'src/app/globals.css' // Adjust path if necessary
import 'src/app/temp-styles.scss';  // Adjust path if necessary
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MobileNavbar from '../components/MobileNavbar';

function MyApp({ Component, pageProps }) {

    useEffect(() => {
        AOS.init();
      }, []);

  return (
    <div lang="en">
      <Navbar />
      <MobileNavbar/>
      <div className='content-wrap'>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
