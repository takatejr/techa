import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Navbar from "./core/navbar";
import { Content } from "./core/content";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Content></Content>
    </div>
  );
}

export default App;
