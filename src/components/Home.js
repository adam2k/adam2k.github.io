import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
import { Code } from '../styles/style';
import Header from './Header';
import Footer from './Footer';
import s from '../styles/home.style';

export default function Home() {
  return (
    <div>
        <Header h1="Adam Vandover" h2="// Rapid Prototyping Software Engineer" />
        <main>
            <p>Hello, I am a software engineer from Norfolk, Virginia. I work with a wide range of technologies including <a href="https://swift.org/" target="_blank">Swift</a>, <a href="http://www.oracle.com/technetwork/java/javase/documentation/index.html" target="_blank">Java</a>, and <a href="https://www.javascript.com/" target="_blank">JavaScript</a>.  I am driven to create innovative, best-in-class software solutions.  I have a strong mastery of puns...although, at times they might be a little pun-gent.</p>
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
