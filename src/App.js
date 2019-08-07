import React, {useEffect, useState} from "react";
import axios from 'axios';
import Background from './components/Background-Photo/Background';
import NEO from './components/NEO/NEO';
import styled from 'styled-components';
import { Container, Divider } from 'semantic-ui-react';
import "./App.css";

function App() {

  const FlexDisplay = styled.div`
    display: flex;

    ${props => props.margin ? `margin: ${props.margin}` : null}
    ${props => (props.directionFlex === 'column' ? `flex-direction: column` : `flex-direction: row`)}
    ${props => (props.spaceBetween ? `justify-content: space-between` : null)}
    ${props => (props.spaceAround ? `justify-content: space-around` : null)}
  `;

  // const Custom = styled(Container)`
  //   background: red;
  // `;

  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
      <FlexDisplay>
        <Background />
        <FlexDisplay directionFlex='column' margin="0 0 0 40px">
          <Container textAlign="center"><h1>Nasa</h1></Container>
          <FlexDisplay spaceBetween>
            <Container textAlign="center"><h2>Space</h2></Container>
            <Container textAlign="center"><h2>Page</h2></Container>
          </FlexDisplay>
          <Divider/>
          <NEO />
        </FlexDisplay>
      </FlexDisplay>
      {/* <NEO tableHeadNames={tableHeaders} data={{nearEarth, asteroidName, diameter, hazerdous}} size={dataSize} /> */}

    </div>
  );
}

export default App;
