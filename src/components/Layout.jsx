import { Head } from '@components';
import PropTypes from 'prop-types';
import React from 'react';

const Layout = ({ children }) => (
  <>
    <Head />

    <div id="root">
      <div id="content">{children}</div>
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout;
