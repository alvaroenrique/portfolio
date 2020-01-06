import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <h2 className="text-center primary-font text-lg">HI,</h2>
    <h2 className="text-center primary-font">My name is Alvaro. I’m a frontend web developer</h2>
  </Layout>
);

export default IndexPage;
