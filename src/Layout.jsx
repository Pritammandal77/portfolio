import React from 'react';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import MainBody from './components/MainBody/MainBody';
import { useRevealAnimation } from './hooks/useRevealAnimation';
import ScrollToTop from './utils/ScrollToTop';

function Layout() {

  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
