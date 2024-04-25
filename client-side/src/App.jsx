import React from 'react';
import './App.css';
import Landing from "../src/pages/Landing";
import About from "./pages/About";
import Services from "../src/pages/Services"
import Contact from "../src/pages/Contact";
import Footer from './components/Footer';

function App() {
 return (
<>
<Landing/>
<About/>
<Services/>
<Contact/>
<Footer/>
</>
  )
}

export default App
