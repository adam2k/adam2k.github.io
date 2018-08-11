import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import s from '../styles/home.style';

export default function Home() {
  return (
    <div>
        <Header h1="Adam Vandover" h2="// Rapid Prototyping Software Engineer" />
        <main>
            <p>Hello, I am a software engineer in San Francisco. I work with a wide range of technologies including <a href="https://reactjs.org/" target="_blank">React</a> and <a href="https://rubyonrails.org/" target="_blank">Rails</a>.  I am driven to create innovative, software solutions.  I have a strong mastery of puns...although, at times they might be a little pun-gent.</p>
            <p>Interested in talking?  Send me a message and we can chat.</p>
            <p>You can find me all around the Interwebs or running around Norfolk.</p>
            <p>
                <Interactive
                    as={Link}
                    {...s.link}
                    to="/resume"
                 >Check out my Resume</Interactive>
            </p>
        </main>
        <Footer />
    </div>
  );
}
