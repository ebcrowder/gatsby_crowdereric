import * as React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const NotFoundPage = () => (
  <>
    <Layout />
    <SEO title="404" />
    <div>
      <h1>404 NOT FOUND</h1>
      <p>That route does not exist - sorry!</p>
    </div>
  </>
);

export default NotFoundPage;
