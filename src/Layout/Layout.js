import React from 'react';
import Header from './Header';
import Upper from './Upper';
import Lower from './Lower';
import Footer from './Footer';
import Video from './Video';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Video />
      <div className='title'></div>
      <Upper />
      {children}
      <div className='title'>Product List</div>
      <Lower />
      <Footer />
    </>
  )
}

export default Layout;
