import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import PicOfTheDay from "./components/PicOfTheDay/PicOfTheDay";
import Particles from "react-particles-js";
import ParticlesConfig from "./components/ParticlesConfig";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Particles className="particles" params={ParticlesConfig} />
      <BrowserRouter>
        <Header />
        <div>
          <Route component={HomePage} exact path="/" />
          <Route component={PicOfTheDay} path="/apod" />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

// Button Animation from https://codepen.io/trinketmage/pen/LWNMqd?editors=1100
// https://www.youtube.com/watch?v=uYZuZwExFcY
// https://www.npmjs.com/package/react-loader-spinner
