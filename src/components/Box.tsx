import * as React from 'react';
import styled from 'styled-components';

interface BoxProps {
  text: string[] | JSX.Element[];
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
  margin: 1rem;
  padding-top: 1rem;
  font-size: 18px;
  color: #ffffff;
  text-align: left;

  a:hover {
    color: #00bfa5;
  }
`;

const Box: React.FunctionComponent<BoxProps> = props => {
  return (
    <BoxContainer>
      <TextContainer>
        <h3>{props.title}</h3>
        {props.text.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </TextContainer>
    </BoxContainer>
  );
};

export default Box;
