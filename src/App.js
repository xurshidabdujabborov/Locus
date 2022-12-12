import React from "react";
import Bottom from "./components/Bottom/Bottom";
import Header from "./components/Header/Header";
import Mision from "./components/Mision/Mision";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/Project/Project";
import Test from "./components/Test/Test";
import Video from "./components/Video/Video";
import Royxat from "./components/Royxat/Royxat";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Video />
      <Mision />
      <Project />
      <Test />
      <Bottom />
      <Royxat />
    </div>
  );
}

export default App;
