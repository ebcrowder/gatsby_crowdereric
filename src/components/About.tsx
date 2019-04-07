import * as React from 'react';
import styled from 'styled-components';
import Box from '../components/Box';

const BoxGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
  grid-template-rows: 300px;
  justify-items: center;
  margin-top: 5rem;
  margin-left: 15rem;
  margin-right: 15rem;
  row-gap: 1rem;

  @media (max-width: 900px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

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
      <Box
        title="Projects"
        text={[
          <a href="https://www.darlingdance.com">darlingdance</a>,
          <a href="https://musing-davinci-817e4c.netlify.com/">Morning Calm</a>,
        ]}
      />
      <Box title="Talks" text={['GatsbyJS - Front End PDX - August 2018']} />
      <Box
        title="Certifications"
        text={['Amazon Web Services (AWS) Certified Developer - Associate']}
      />
    </BoxGrid>
  </div>
);

export default About;
