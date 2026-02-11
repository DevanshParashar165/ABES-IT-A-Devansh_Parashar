import React from "react";
import "./Home.css";

function Home() {
  return (
    <section className="home">
      
      <div className="hero">
        <img
          src="https://www.abes.ac.in/assets/2.jpg"
          alt="College"
          className="hero-img"
        />

    
        <div className="hero-overlay">
          <h1>ABES Engineering College</h1>
        </div>
      </div>

    </section>
  );
}

export default Home;
