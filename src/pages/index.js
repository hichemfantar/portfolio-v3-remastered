import '@styles/_scss/main.scss';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
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

const IndexPage = ({ location }) => {
  useEffect(() => {
    const d = new Date();
    const hours = d.getHours();
    const night = hours >= 19 || hours <= 7; // between 7pm and 7am
    const body = document.querySelector('body');
    const html = document.querySelector('html');
    const input = document.getElementById('switch');

    if (night) {
      input.checked = true;
      body.classList.add('night');
      html.style.colorScheme = 'dark';
    } else {
      html.style.colorScheme = 'light';
    }

    return () => {};
  }, []);

  return (
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
};

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
