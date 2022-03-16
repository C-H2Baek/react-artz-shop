import React from 'react';
import Header from './Header';
import Upper from './Upper';
import Lower from './Lower';
import Footer from './Footer';
import Browser from '../Browser';


const Layout = ({children}) => {
  return (
    <>
      <Header />
      
      <h2>Event Slider</h2>
      <Upper />
      {children}<br></br><br></br>
      <h2>Product List</h2>
      <Lower />
      <Footer />
      
    </>
  )
}

export default Layout;
