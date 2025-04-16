// App.js
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import UpworkHighlight from "./components/UpworkHighlight";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <UpworkHighlight />
      <Projects />
      <Testimonials />
      <Skills />
      <Footer />
    </>
  );
}

export default App;
