import React, { useState } from "react";
import "./Work.css";

function Work() {

  const [result, setResult] = useState("");

  // FETCH FROM BACKEND AND RETURN DATA
  const getOSInfo = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/os-info");
      const json = await res.json();
      return json; // ⭐ RETURN DATA
    } catch (err) {
      console.log(err);
    }
  };

  // BUTTON HANDLERS
  const showUser = async () => {
    const data = await getOSInfo();
    setResult(data?.userInfo?.username);
  };

  const showArch = async () => {
    const data = await getOSInfo();
    setResult(data?.architecture);
  };

  const showHost = async () => {
    const data = await getOSInfo();
    setResult(data?.hostName);
  };

  const showTotalMem = async () => {
    const data = await getOSInfo();
    setResult(data?.totalMemory);
  };

  const showFreeMem = async () => {
    const data = await getOSInfo();
    setResult(data?.freeMemory);
  };

  return (
    <section className="work">
      <h1 className="work-title">OS With React</h1>

      <div className="work-card">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2282/2282188.png"
          alt="OS"
          className="work-img"
        />

        <div className="btn-group">
          <button onClick={showUser}>User Info</button>
          <button onClick={showArch}>Architecture</button>
          <button onClick={showHost}>Host Name</button>
          <button onClick={showTotalMem}>Total Memory</button>
          <button onClick={showFreeMem}>Free Memory</button>
        </div>

        {result && <div className="result-box">{result}</div>}
      </div>
    </section>
  );
}

export default Work;
