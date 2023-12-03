import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";

import "./App.css";
import Copy from "./components/Copy/Features";
import React from "react";
function App() {
  return (
    <div
      className="App"
    >
      <Navbar />
      <Intro />
      <Copy></Copy>
     
    </div>
  );
}
export default App;
