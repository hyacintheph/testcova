import React from 'react';
import './App.css';
import {Menu} from "./components/Menu";
import {Landing} from "./components/Landing";
import {Trust} from "./components/Trust";
import {Footer} from "./components/Footer";
function App() {
  return (
    <div>
      <Menu/>
        <Landing/>
        <Trust/>
      <Footer/>
    </div>
  );
}

export default App;
