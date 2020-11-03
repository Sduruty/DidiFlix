import React from "react";
import "./App.css";
import Section from "./components/Section";
import data from "./assets/data.json";
import Logo from "./assets/logo.svg";

function App() {
  return (
    <div className="App">
      <img className="logo" src={Logo} alt="logoNetflix"/>
      <div className="wrapper">
        {data.map((elem, index) => {
          const name = elem.category;
          const movies = elem.images;
          return <Section category={name} images={movies} />;
        })}
      </div>
    </div>
  );
}

export default App;