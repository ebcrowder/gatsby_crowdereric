import * as React from 'react';
import styled from 'styled-components';

interface BoxProps {
  text: string[];
  title: string;
}

const BoxContainer = styled.div`
  position: relative;
  width: 250px;
  height: 280px;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  background: #313131;
  box-shadow: 0px 8px 8px #000000;
  border-radius: 20px;
`;

const TextContainer = styled.ul`
  position: relative;
  padding-top: 1rem;
  padding-left: 1rem;
  font-size: 18px;
  color: #ffffff;
  text-align: left;
  list-style-type: none;

  pre {
    text-align: center;
    font-size: 16px;
  }

  a {
    color: #ffffff;
  }

  a:hover {
    font-weight: bold;
  }
`;

const Box: React.FunctionComponent<BoxProps> = props => {
  return (
    <BoxContainer>
      <TextContainer>
        <h3>{props.title}</h3>
        {props.text.map((item: string, i: number) => (
          <li key={i}>{item}</li>
        ))}
      </TextContainer>
    </BoxContainer>
  );
};

export default Box;
