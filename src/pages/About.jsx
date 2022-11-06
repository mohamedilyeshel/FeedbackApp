import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <>
      <div>About us</div>
      <button
        onClick={() => {
          navigate(`me`);
        }}
      >
        Click here to run the me route
      </button>
      <Routes>
        <Route path="me" element={<h3>Me</h3>} />
        <Route path="ilyes" element={<h1>Ilyesh</h1>} />
      </Routes>
    </>
  );
}

export default About;
