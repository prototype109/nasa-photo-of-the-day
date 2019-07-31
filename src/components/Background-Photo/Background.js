import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Background(){
    const [background, setBackground] = useState("");
    const [explanation, setExplanation] = useState("");

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=3ub7zrZEVZpqcjuUzr1Ke0aPi24xCB7DHh4ukDdw')
          .then(res => {
            setBackground(res.data.url);
            setExplanation(res.data.explanation);
          })
          .catch(err => console.log('error: ', err));
      }, []);

      return(
          <div className="background">
              <img src={background} alt={explanation}/>
          </div>
      )
}

export default Background;