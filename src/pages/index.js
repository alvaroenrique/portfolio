import React, { useState, useEffect } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BlogButton from '../components/button-links/blog';
import PersonalProjectsButton from '../components/button-links/personal-projects';
import ProffesionalWorkButton from '../components/button-links/professional-work';
import ResumeButton from '../components/button-links/resume';

const IndexPage = () => {
  const [isSubtitleChange, setIsSubtitleChange] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsSubtitleChange(true);
    }, 1500);
  });
  return (
    <Layout>
      <SEO title="Home" />
      <h2 className="text-center primary-font text-lg">HI,</h2>
      <h2
        className={`subtitle text-center primary-font text-md ${
          isSubtitleChange ? 'fade-out-br' : 'fade-in'
        }`}
      >
        My name is Alvaro. I’m a frontend web developer
      </h2>
      {isSubtitleChange && (
        <h2 className="subtitle text-center primary-font text-md fade-in-left">
          Here is something about me
        </h2>
      )}

      {isSubtitleChange && (
        <div className="buttons-container">
          <div className="buttons-colums">
            <BlogButton />
            <PersonalProjectsButton />
          </div>
          <div className="buttons-colums">
            <ProffesionalWorkButton />
            <ResumeButton />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default IndexPage;
