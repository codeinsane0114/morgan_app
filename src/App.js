import React, {useState, useEffect, useRef} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Wrapper } from './Components/Wrapper'
import Header from "./Layouts/Header";
import ReactScrollToTop from "react-scroll-to-top";
import './index.css';

function App() {
  return (
    <BrowserRouter>
    <Wrapper>
      <div className="App bg-custom-color">
        <Header />
        <ReactScrollToTop
              smooth
              className="scroll-to-top-button border-brown-bg bg-main-bg animate-duration hover:bg-brown-bg rounded-full border-[2px]"
              height="22"
            />
      </div>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
