import React from "react";
import "./App.scss";
import Navbar from "./core/navbar";
import { Post } from "./core/post";


function App() {
// const [language, setLanguage] = useState("SCALA")

  return (
    <div>
      <Navbar></Navbar>
      <Post></Post>
    </div>
  );
}

export default App;
