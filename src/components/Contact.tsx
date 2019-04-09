import * as React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  margin: 5rem;
`;

const Contact = () => (
  <ContactContainer>
    <p>
      I'm available to work on freelance and open source opportunities. Feel
      free to reach out to <a href="mailto:ebcrowder@gmail.com">me</a> for
      coffee!
    </p>
  </ContactContainer>
);

export default Contact;
