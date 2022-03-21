import React from 'react';
import Header from '../Layout/Header';
import Upper from '../Layout/Upper';
import Lower from '../Layout/Lower';
import Footer from '../Layout/Footer';

const Action1 = ({ children }) => {
  return (
    <>
      <Header />
      <div className='title'>Category 6</div>
      <Lower />
      <Footer />
    </>
  )
}

export default Action1;
