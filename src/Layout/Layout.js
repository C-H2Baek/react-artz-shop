import React from 'react';
import Header from './Header';
import Upper from './Upper';
import Lower from './Lower';
import Footer from './Footer';


const Layout = ({children}) => {
  return (
    <>
      <Header />
      <Upper />
      {children}
      <Lower />
      <Footer />
    </>
  )
}

export default Layout;
