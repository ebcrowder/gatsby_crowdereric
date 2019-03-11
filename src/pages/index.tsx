import * as React from 'react';

import SEO from '../components/SEO';
import Splash from '../components/Splash';

const SplashPage = () => (
  <>
    <SEO
      title="hello"
      keywords={[
        'blog',
        'tech',
        'crowder',
        'eric',
        'javascript',
        'developer',
        'software',
      ]}
    />
    <Splash />
  </>
);

export default SplashPage;
