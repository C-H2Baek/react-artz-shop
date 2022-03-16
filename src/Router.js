import './App.css';
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from './Module/NotFound';
import { Info, Recent, Cart, Notice, Login, SignUp, Global } from './Module/';
import Layout from './Layout/Layout';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Layout/>}/>
          <Route exact path="/Module/Info" element={<Info/>}/>
          <Route exact path="/Module/Recent" element={<Recent/>}/>
          <Route exact path="/Module/Cart" element={<Cart/>}/>
          <Route exact path="/Module/Notice" element={<Notice/>}/>
          <Route exact path="/Module/Login" element={<Login/>}/>
          <Route exact path="/Module/SignUp" element={<SignUp/>}/>
          <Route exact path="/Module/Global" element={<Global/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    );
  }
}

export default App;