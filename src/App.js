import React, {useEffect, useState} from "react";
import axios from 'axios';
import Background from './components/Background-Photo/Background';
import NEO from './components/NEO/NEO';
import "./App.css";

function App() {

  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
      <Background />
      <NEO />
      {/* <NEO tableHeadNames={tableHeaders} data={{nearEarth, asteroidName, diameter, hazerdous}} size={dataSize} /> */}

    </div>
  );
}

export default App;
