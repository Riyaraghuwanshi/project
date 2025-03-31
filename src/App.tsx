import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Mentors from "./components/Mentors";
import Events from "./components/Events";
import HallOfFame from "./components/HallOfFame";
import Testimonials from "./components/Testimonials";
import JoinUs from "./components/JoinUs";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="stats">
          <Stats />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="mentors">
          <Mentors />
        </section>
        <section id="events">
          <Events />
        </section>
        <section id="hall-of-fame">
          <HallOfFame />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="join-us">
          <JoinUs />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
