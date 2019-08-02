import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

function Background(){
    const [background, setBackground] = useState("");
    const [explanation, setExplanation] = useState("");

    // const Background = styled.div`
    //     position: absolute;
    //     z-index: -1;
    // `;

    const Image = styled.img`
        max-width: 50%;
    `;

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=3ub7zrZEVZpqcjuUzr1Ke0aPi24xCB7DHh4ukDdw')
          .then(res => {
            setBackground(res.data.url);
            setExplanation(res.data.explanation);
          })
          .catch(err => console.log('error: ', err));
      }, []);

      return(
          <div>
              <Image src={background} alt={explanation}/>
          </div>
      )
}

export default Background;