import React, { Dispatch, SetStateAction, useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Navbar from "./core/navbar";
import { Post } from "./core/post";


function App() {
const [language, setLanguage] = useState("SCALA")

  return (
    <div>
      <Navbar></Navbar>
      <Post></Post>
    </div>
  );
}

export default App;
