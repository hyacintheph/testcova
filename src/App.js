import React from 'react';
import './App.css';
import {Menu} from "./components/Menu";
import {Landing} from "./components/Landing";
import {Trust} from "./components/Trust";
import {Footer} from "./components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();
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
