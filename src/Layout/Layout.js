import React from 'react';
import Header from './Header';
import Upper from './Upper';
import Lower from './Lower';
import Footer from './Footer';
import Browser from '../Browser';


const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className='title'>Category</div>
      <Upper />
      {children}<br></br><br></br><br></br>
      <div className='title'>Product List</div>
      <Lower />
      <Footer />
    </>
  )
}

export default Layout;
