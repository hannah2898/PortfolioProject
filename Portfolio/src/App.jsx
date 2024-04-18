import Header from "./components/Header";
import React from 'react';
import Footer from "./components/Footer";
import Home from "./components/HomePage";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <main id="main">
      <Home />
      <Skills />
      <Projects/>
    </main>
    <Footer />
  </>
  )
}

export default App
