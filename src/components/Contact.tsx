import * as React from 'react';

import styled from 'styled-components';

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContactContainer = styled.div`
  margin: 5rem;
  display: grid;
  grid-template-columns: 10rem 10rem;
  grid-template-rows: 5rem;
  justify-content: center;
`;

const ContactLink = styled.a`
  margin: 0.5rem;
`;

const Contact = () => (
  <>
    <ContactContainer>
      <h2>contact:</h2>
      <ContactInfo>
        <ContactLink
          href="mailto:ebcrowder@gmail.com"
          data-animate-hover="pulse"
          className="email"
          data-testid="email"
        >
          email
        </ContactLink>
        <ContactLink
          href="https://github.com/ebcrowder"
          data-animate-hover="pulse"
          className="external github"
          data-testid="github"
        >
          github
        </ContactLink>
      </ContactInfo>
    </ContactContainer>
  </>
);

export default Contact;
