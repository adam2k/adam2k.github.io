import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

const propTypes = {
  location: PropTypes.object.isRequired
};

export default function PageNotFound({ location }) {
  return (
    <div>
      <Header h1="Aww snap...this page was not found." />
      <main>
        <h2>Looks like this is a four-oh-four.</h2>
        <h2>
          I guess we <strong>four-got</strong> to add a page here.
        </h2>
      </main>
      <Footer />
    </div>
  );
}

PageNotFound.propTypes = propTypes;
