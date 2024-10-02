import React, {useState, useEffect, useRef} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Layouts/Header";
import './index.css';

function App() {
  return (
    <div className="App bg-custom-color">
      <Header />
    </div>
  );
}

export default App;
