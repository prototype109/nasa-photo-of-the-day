import React, {useEffect} from "react";
import axios from 'axios';
import Background from './components/Background-Photo/Background';
import "./App.css";

function App() {

  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
      <Background />

    </div>
  );
}

export default App;
