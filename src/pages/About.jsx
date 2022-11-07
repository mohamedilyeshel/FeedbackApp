import React from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import Card from "../components/SharedComponents/Card";

function About() {
  const navigate = useNavigate();
  return (
    <>
      <Card>
        <h2>About us</h2>
        <p>
          This is a react application made by mohamed ilyes helal to learn
          ReactJs (Components, Routers, ContextApi)
        </p>
        <Link to="/">Back to Home page</Link>
      </Card>

      {/* <button
        onClick={() => {
          navigate(`me`);
        }}
      >
        Click here to run the me route
      </button>
      <Routes>
        <Route path="me" element={<h3>Me</h3>} />
        <Route path="ilyes" element={<h1>Ilyesh</h1>} />
      </Routes> */}
    </>
  );
}

export default About;
