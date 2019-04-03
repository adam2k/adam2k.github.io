import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import s from '../styles/home.style';

export default function Home() {
  return (
    <div>
      <Header h1="Adam Vandover" h2="// Software Engineer" />
      <main>
        <p>
          Hello, I am a software engineer from Virginia, living in San Francisco. I work with a wide
          range of technologies including{' '}
          <a href="https://reactjs.org/" target="_blank">
            React
          </a>
          ,{' '}
          <a href="https://redux.js.org/" target="_blank">
            Redux
          </a>{' '}
          and{' '}
          <a href="https://www.java.com/" target="_blank">
            Java
          </a>
          . I am a musician, public speaker, collaborator and creative. I am driven to create
          innovative, inclusive software solutions that help improve lives.
        </p>
        <p>Interested in talking? Send me a message and we can chat.</p>
        <p>You can find me all around the Interwebs or biking around San Francisco.</p>
        <p>
          <Interactive as={Link} {...s.link} to="/resume">
            Check out my Resume
          </Interactive>
        </p>
      </main>
      <Footer />
    </div>
  );
}
