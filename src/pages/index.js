import PropTypes from 'prop-types';
import React from 'react';
import {
  Background,
  Experience,
  FeaturedProjects,
  Intro,
  OtherProjects,
  Skills,
  Switch,
  Layout,
  Footer,
  TopButton,
} from '@components';

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Switch />
    <Intro />
    <Background />
    <Skills />
    <Experience />
    <FeaturedProjects />
    <OtherProjects />

    <Footer />
    <TopButton />
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
