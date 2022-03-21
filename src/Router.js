import './App.css';
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from './Module/NotFound';
import { Info, Recent, Cart, Notice, Login, SignUp, Global, Product } from './Module/';
import { Action1, Action2, Action3, Action4, Action5, Action6 } from './Pages/';
import Layout from './Layout/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Layout />} />
          <Route exact path="/Module/Info" element={<Info />} />
          <Route exact path="/Module/Recent" element={<Recent />} />
          <Route exact path="/Module/Cart" element={<Cart />} />
          <Route exact path="/Module/Notice" element={<Notice />} />
          <Route exact path="/Module/Login" element={<Login />} />
          <Route exact path="/Module/SignUp" element={<SignUp />} />
          <Route exact path="/Module/Global" element={<Global />} />
          <Route exact path="/Module/Product" element={<Product />} />
          <Route exact path="/Action1" element={<Action1 />} />
          <Route exact path="/Action2" element={<Action2 />} />
          <Route exact path="/Action3" element={<Action3 />} />
          <Route exact path="/Action4" element={<Action4 />} />
          <Route exact path="/Action5" element={<Action5 />} />
          <Route exact path="/Action6" element={<Action6 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    );
  }
}

export default App;