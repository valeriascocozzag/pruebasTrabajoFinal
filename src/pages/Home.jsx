// src/pages/Home.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonial from "../components/Testimonial";
import CallToAction from "../components/CallToAction";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";

const Home = () => (
  <>
    <Navbar />

    <main className="mt-5 pt-5">
      <Hero />
      <Features />
      <Jumbotron />
      <Testimonial />
      <CallToAction />
      <Contact />
    </main>

    <Footer />
  </>
);

export default Home;
