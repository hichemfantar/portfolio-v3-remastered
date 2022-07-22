import { Layout } from '@components';
import thinkingFace from '@images/img/emojis/thinking-face.png';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Switch from '../components/Switch';

const NotFoundPage = ({ location }) => {
  useEffect(() => {
    const body = document.querySelector('body');

    body.classList.add('not-found');
  }, []);

  const content = (
    <>
      <Switch />
      <div className="name">Hichem Fantar</div>
      <img src={thinkingFace} alt="" />
      <h1>Hmmm...</h1>
      <h2>
        Looks like there's nothing here.
        <br />
        Maybe you should go back <a href="/">home</a>.
      </h2>
    </>
  );

  return (
    <Layout location={location}>
      <Helmet title="Page Not Found" />

      {content}
    </Layout>
  );
};

NotFoundPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default NotFoundPage;
