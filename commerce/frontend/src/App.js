import Header from './layouts/Header';
import Main from './layouts/Main';
import Footer from './layouts/Footer';
import './App.css';
import React from 'react';

import "./assets/sass/app.scss"
function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
