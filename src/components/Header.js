import React from 'react';
import Interactive from 'react-interactive';
import { Code } from '../styles/style';
import { Switch, Route, Link } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import s from '../styles/home.style';

export default function Header(props) {

    return (
        <header>
            <div className="inner-header">
                <Interactive
                    as={Link}
                    to="/"
                    className="header-link"
                 ><img className="profile-pic" src="images/profile.jpg" httpEquiv="Expires" content="86400" /></Interactive>
                <div className="card">
                    <Interactive
                        as={Link}
                        {...s.headerLink}
                        to="/"
                    ><h1>{props.h1}</h1></Interactive>
                    <h2>{props.h2}</h2>
                </div>
            </div>
        </header>
    );
}
