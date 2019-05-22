import * as React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import Box from '../components/Box';

const BoxGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  justify-items: center;
  justify-content: center;
  margin-top: 5rem;
  margin-left: 2rem;
  margin-right: 2rem;
  row-gap: 1rem;
`;

const BoxContainer = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
  },
  press: {
    scale: 1,
  },
});

const About = () => (
  <div>
    <h1>about</h1>

    <div className="bio">
      <p>
        I am a web developer based in sunny Portland, Oregon. As a developer, I
        really enjoy collaborating with teams to solve difficult problems. In my
        spare time, I enjoy working on projects that align with my values and
        stretch my abilities.
      </p>
      <p>
        When not building internet things indoors, I spend a lot of time running
        in gorgeous Forest Park. I love being a part of the trail running
        community here in the Pacific Northwest and enjoy exploring the many
        trails located in Oregon and Washington. I also really enjoy hiking and
        camping.
      </p>
    </div>

    <BoxGrid>
      <BoxContainer>
        <Box
          title="Toolbox"
          text={[
            'JavaScript',
            'TypeScript',
            'React',
            'Node.js',
            'GraphQL',
            'PHP',
            'Docker',
            'Amazon Web Services',
          ]}
        />
      </BoxContainer>
      <BoxContainer>
        <Box
          title="Projects"
          text={[
            <a
              className="darling"
              key="darling"
              href="https://www.darlingdance.com"
            >
              darlingdance
            </a>,
            <a
              className="morning"
              key="morning"
              href="https://musing-davinci-817e4c.netlify.com/"
            >
              Morning Calm
            </a>,
            <a
              className="portfolio"
              key="portfolio"
              href="https://github.com/ebcrowder"
            >
              ... and more at github!
            </a>,
          ]}
        />
      </BoxContainer>
      <BoxContainer>
        <Box title="Talks" text={['GatsbyJS - Front End PDX - August 2018']} />
      </BoxContainer>
    </BoxGrid>
  </div>
);

export default About;
