import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';
import PageNotFound from './PageNotFound';

export default function Footer() {
  return (
      <footer>
        <div className="inner-footer">
            <ul>
                <li>
                    <a href="&#109;&#97;&#x69;&#x6c;&#116;&#x6f;&#58;&#x61;&#x76;&#x61;&#110;&#x64;&#111;&#118;&#101;&#114;&#x40;&#x67;&#109;&#x61;&#x69;&#x6c;&#x2e;&#99;&#111;&#109;">
                        <i className="mdi mdi-email"></i>
                        <span>email</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/avandover" target="_blank">
                        <i className="mdi mdi-linkedin"></i>
                        <span>linkedin</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.github.com/adam2k" target="_blank">
                        <i className="mdi mdi-github-circle"></i>
                        <span>github</span>
                    </a>
                </li>
                <li>
                    <a href="https://teamtreehouse.com/adam2k" target="_blank">
                        <i className="mdi mdi-book"></i>
                        <span>Team Treehouse</span>
                    </a>
                </li>
                <li>
                    <a href="https://stackoverflow.com/users/1008875/adam2k" target="_blank">
                        <i className="mdi mdi-stackoverflow"></i>
                        <span>stackoverflow</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/adam2k" target="_blank">
                        <i className="mdi mdi-instagram"></i>
                        <span>Instagram</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.twitter.com/adam2k" target="_blank">
                        <i className="mdi mdi-twitter"></i>
                        <span>twitter</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/adam2k" target="_blank">
                        <i className="mdi mdi-facebook-box"></i>
                        <span>facebook</span>
                    </a>
                </li>
            </ul>
        </div>
    </footer>
    );
}
