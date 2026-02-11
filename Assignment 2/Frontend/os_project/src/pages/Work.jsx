import React from "react";
import "./Work.css";

function Work() {
  return (
    <section className="work">

      <h1 className="work-title">OS With React</h1>

      {/* CARD */}
      <div className="work-card">

        <img
          src="https://cdn-icons-png.flaticon.com/512/2282/2282188.png"
          alt="OS"
          className="work-img"
        />

        <div className="btn-group">
          <button>User Info</button>
          <button>Architecture</button>
          <button>Host Name</button>
          <button>Total Memory</button>
          <button>Free Memory</button>
        </div>

      </div>

    </section>
  );
}

export default Work;
