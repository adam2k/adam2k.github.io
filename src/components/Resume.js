import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import PageNotFound from './PageNotFound';
import s from '../styles/resume.style';

export default function Resume() {
  return (
      <div>
          <Header h1="Adam Vandover" h2="// Rapid Prototyping Software Engineer" />
          <main className="resume">
              <h2>Professional Profile</h2>
              <p>Driven to create innovative, best-in-class software solutions.  Excellent communicator with experience in interpreting and implementing software solutions based on data science and design sprints.  Passionate about developing and creating well constructed, web standards compliant products and applications.  Known for handling multiple projects simultaneously while still meeting critical deadlines.  The desire to create flexible data-driven applications that evolve and improve the web.  Obsessed with pixel perfection, from design mockups and diagrams to development.  Lives for learning and implementing what is possible with the latest technology.</p>

              <h2>Technology Stack</h2>
              <ul>
                <li>
                  Programming:
                  <ul>
                    <li>Swift 3.1, Java (Spring), JavaScript (Node.js, React, React Native)</li>
                  </ul>
                </li>
                <li>
                  Package/Dependency Managers & Task Runners:
                  <ul>
                      <li>yarn, npm, bower, Homebrew, Cocoapods</li>
                  </ul>
                </li>
                <li>
                  Servers, Databases:
                  <ul>
                      <li>Nginx, Apache, Node.js, Firebase (Database), Docker, MySQL/Mariadb, SQL, Amazon RDS</li>
                  </ul>
                </li>
                <li>
                  Development & Design Software:
                  <ul>
                      <li>XCode, Atom (Nuclide), IntelliJ IDEA, iTerm2, Git, Sketch, Sequel Pro, MySQL Workbench</li>
                  </ul>
                </li>
              </ul>

              <h2>Experience</h2>
              <h3>2017 - Present</h3>
              <h4>forrent.com <span>// Manager of Mobile Development and Research & Development Teams</span></h4>
              <p>Manages a team of six to build production-ready mobile applications and prototype applications.  Develop using the Google Ventures one-week design sprint to produce new testable services and apps rapidly.  Maintains sprint progress using Jira to track epics, issues, and tasks.  Continually mitigates internal and external challenges with daily standup meetings and bi-weekly manager meetings.</p>

              <h3>2016 - 2017</h3>
              <h4>forrent.com <span>// Research & Development Rapid Prototype Developer</span></h4>
              <p>Builds prototype applications within one-week design sprints.  Learning from empirical data gathered by UX testing feedback to prevent wasting time and money by time going into full production for new features.  Develop prototypes and applications using tools and frameworks from Keynote to Angular to XCode.  Uses git to push production quality code to the ForRent.com API mobile and desktop websites.  Building the For Rent photo manager application for the sales team to take pictures of properties while on site and store within the For Rent database.</p>

              <h3>2014 - 2016</h3>
              <h4>hny creative <span>// Owner & Developer</span></h4>
              <p>Works with a team of five to build solutions for non-profit, small and large businesses.  Develop websites and applications using WordPress, Laravel, CodeIgniter, and Magento while tailoring them to fit the requirements of the individual business.  Integrates Google Analytics, Google Apps, SEO Tools and MailChimp to increase the website value for stakeholders.  Work with non-profits, retail shops, and agencies to create solutions for individual business needs.  Build solutions using Amazon Web Services including Amazon EC2, Route 53, RDS, S3, and CloudFront.  Visit hnycreative.com for portfolio and project examples.</p>

              <h3>2008 - 2014</h3>
              <h4>IBM <span>// Senior Technical Consultant</span></h4>
              <p>Worked with clients such as DTE Energy, Customs and Border Protection Agency, and the United States Army.  Built a frontend rate calculator for DTE Energy using Twitter’s Bootstrap.  Rewrote an outdated Tririga Application for Customs and Border Protection Agency to create a live training learning management system using Microsoft ASP, Zurb’s Foundation, and integrated with Adobe Connect.  Develop and implement course templates using web-based technologies including HTML, CSS, XML, Adobe Flash and JavaScript for a simple exam and course deployment for instructors. Maintain Git repositories for in-progress development among several team members.</p>

              <h3>2007 - 2008</h3>
              <h4>Cubic Corporation <span>// Web Course Developer</span></h4>
              <p>Created and sustained course content and exams on the Joint Forces Command Learning Management System.  The courses were developed using Adobe Flash, ActionScript 2.0 and 3.0, HTML, CSS, XML, JavaScript and SCORM 2004.</p>

              <p className="note">*References available upon request.</p>
          </main>
          <Footer />
      </div>
  );
}
