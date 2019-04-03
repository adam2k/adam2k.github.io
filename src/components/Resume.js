import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Resume() {
  return (
    <div>
      <Header h1="Adam Vandover" h2="// Software Engineer" />
      <main className="resume">
        <h2>Professional Profile</h2>
        <p>Dedicated to improving lives with technology. Excellent communicator with experience in interpreting and implementing software solutions based on data science experiments and design sprints. Passionate about developing and creating well constructed, web standards compliant products and applications while always keeping the user experience top of mind.  The desire to formulate flexible data-driven applications and improve outcomes by continually iterating.  Lives for learning and implementing what is possible with the latest technology.</p>
        <h2>Technology Stack</h2>
        <ul>
          <li>
            <strong>Programming:</strong>
            <ul>
              <li><strong>Current:</strong> Typescript/JavaScript (React, React Native), Java (Spring), Swift, Rails</li>
              <li><strong>Previous:</strong> php, C++</li>
            </ul>
          </li>
          <li>
            <strong>Development/Collaboration Tools:</strong>
            <ul>
              <li>Github, Slack, Jira, Zeplin, Figma and Invision</li>
            </ul>
          </li>
          <li>
            <strong>Package/Dependency Managers &amp; Tools:</strong>
            <ul>
              <li>yarn, npm, webpack, Homebrew, Cocoapods, zsh</li>
            </ul>
          </li>
          <li>
            <strong>Servers, Databases, Deployment:</strong>
            <ul>
              <li>Google Cloud Platform, AWS, Heroku, Elasticsearch, Firebase (Database), PostgreSQL, MySQL/MariaDB, Docker, Kubernetes</li>
            </ul>
          </li>
          <li>
            <strong>Development &amp; Design Software:</strong>
            <ul>
              <li>VS Code, IntelliJ IDEA, XCode, iTerm2, Git, Sketch</li>
            </ul>
          </li>
        </ul>

        <h2>Experience</h2>
        <h3>2018 - 2018</h3>
        <h4>Zume <span>// Software Engineer</span></h4>
        <p></p>
        
        <h3>2018 - 2018</h3>
        <h4>Handshake <span>// Software Engineer</span></h4>
        <p>Works in a mission-driven environment building production-ready code using React/Redux and Rails for millions of active users.  Closely working within a team of five in an agile sprint process developing products for premium employers to help empower students to make career decisions.  Takes product requirements and designs from Zeplin to give feedback in scoping sessions to build best-in-class features for employers.  A member of the frontend guild that helps makes decisions on best practices for developing the frontend of the application.</p>
        
        <h3>2016 - 2018</h3>
        <h4>forrent.com <span>// Manager of Mobile Development and Research &amp; Development Teams</span></h4>
        <p>Manages a team of six to build production-ready mobile and prototype applications for millions of monthly users. Creates a live video streaming service for property managers to show off their property and answer questions for potential renters all from their iOS or Android devices.  Maintains sprint progress using Jira to track epics, issues, and tasks.  Continually mitigates internal and external challenges with daily standup meetings.</p>

        <h4>forrent.com <span>// Research &amp; Development Rapid Prototype Developer</span></h4>
        <p>Develops applications using the Google Ventures one-week design sprint methodology to produce new testable services and apps rapidly.  Conducts one-on-one customer interviews using prototypes to prevent wasting time and money by determining value before going into full production.  Develops an iPad Pro application to automate creating pitch decks with pertinent property information for the ForRent sales team when visiting clients on-site.  Helping to save countless hours of manually building sales pitch slide decks with inconsistent results and incorrect data.  Uses git to push production quality code to the ForRent.com API, mobile apps and desktop website.</p>

        <h3>2014 - 2016</h3>
        <h4>hny creative <span>// Software Engineer</span></h4>
        <p>Works with a team of five to build solutions for non-profit, small and large businesses.  Develops a localized application for the Hampton Roads area that creates an easily searchable network of local companies who support each other by offering deals and discounts based on individual customer sales at any of the participating businesses throughout the area.  Builds the application using WordPress (Website), Laravel (API), iOS and Android apps.  Works with nonprofits, retail shops, and agencies to create solutions for individual business needs.  Build solutions using Amazon Web Services including Amazon EC2, Route 53, RDS, S3, and CloudFront.</p>

        <h3>2008 - 2014</h3>
        <h4>IBM <span>// Senior Technical Consultant</span></h4>
        <p>Works with large clients in the military and public utility spaces.  Builds a frontend rate calculator for an energy company to help customers estimate their monthly bills.  Rewrites an outdated Tririga Application for a large government agency from the ground up to create a learning management system integrating with Adobe Connect to deliver engaging real-time training.  Develops and implements course templates including HTML, CSS, Adobe Flash and JavaScript for exams and course deployments for instructors.</p>

        <h3>2007 - 2008</h3>
        <h4>Cubic Corporation <span>// Web Developer</span></h4>
        <p>Creates and maintains course content and exams for a Learning Management System used by a large government entity.  Develops courses using Adobe Flash, ActionScript 2.0 and 3.0, HTML, CSS, JavaScript and SCORM 2004.</p>

        <p className="note">*References available upon request.</p>

        <h2>Recent Accomplishments</h2>
        <ul>
          <li>Fall 2017 - Speaker at Dominion Enterprises DevCon 2017</li>
          <li>Summer 2017 - Dominion Enterprises Tactical Management Training</li>
          <li>Summer 2017 - Chaired/Coordinated Dominion Enterprises Internal Hackathon</li>
          <li>Spring 2017 - Co-Chaired/Coordinated Dominion Enterprises Student Hackathon</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}
