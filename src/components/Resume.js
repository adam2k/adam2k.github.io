import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Resume() {
  return (
    <div>
      <Header h1="Adam Vandover" h2="// Rapid Prototyping Software Engineer" />
      <main className="resume">
        <h2>Professional Profile</h2>
        <p>Driven to create innovative software solutions. Excellent communicator with experience in interpreting and implementing software solutions based on data science and design sprints.  Passionate about developing and creating well constructed, web standards compliant products and applications.  The desire to create flexible data-driven applications that evolve and improve the web.  Lives for learning and implementing what is possible with the latest technology.</p>
        <h2>Technology Stack</h2>
        <ul>
          <li>
            <strong>Programming:</strong>
            <ul>
              <li>Current: React, Rails</li>
              <li>Previous: Swift, Java, php, C++</li>
            </ul>
          </li>
          <li>
            <strong>Development Tools, Package/Dependency Managers &amp; Task Runners:</strong>
            <ul>
              <li>VS Code, iTerm2, Git, yarn, npm, Homebrew</li>
            </ul>
          </li>
          <li>
            <strong>Servers, Databases, Deployment:</strong>
            <ul>
              <li>Amazon AWS, Google Cloud Platform, Docker, Kubernetes, Nginx, Apache, Elastic Search, Firebase, PostgreSQL, MySQL/Mariadb</li>
            </ul>
          </li>
        </ul>

        <h2>Experience</h2>
        <h3>2016 - 2018</h3>
        <h4>forrent.com <span>// Manager of Mobile Development and Research &amp; Development Teams</span></h4>
        <p>Manages a team of six to build production-ready mobile applications and prototype applications.  Develop using the Google Ventures one-week design sprint to produce new testable services and apps rapidly.  Maintains sprint progress using Jira to track epics, issues, and tasks.  Continually mitigates internal and external challenges with daily standup meetings and bi-weekly manager meetings.</p>

        <h4>forrent.com <span>// Research &amp; Development Rapid Prototype Developer</span></h4>
        <p>Builds prototype applications within one-week design sprints.  Learning from empirical data gathered by UX testing feedback to prevent wasting time and money by time going into full production for new features.  Develop prototypes and applications using tools and frameworks from Keynote to Angular to XCode.  Uses git to push production quality code to the ForRent.com API mobile and desktop websites.  Building the For Rent photo manager application for the sales team to take pictures of properties while on site and store within the For Rent database.</p>

        <h3>2014 - 2016</h3>
        <h4>hny creative <span>// Owner &amp; Developer</span></h4>
        <p>Works with a team of five to build solutions for non-profit, small and large businesses.  Develop websites and applications using WordPress, Laravel, CodeIgniter, and Magento while tailoring them to fit the requirements of the individual business.  Integrates Google Analytics, Google Apps, SEO Tools and MailChimp to increase the website value for stakeholders.  Work with non-profits, retail shops, and agencies to create solutions for individual business needs.  Build solutions using Amazon Web Services including Amazon EC2, Route 53, RDS, S3, and CloudFront.</p>

        <h3>2008 - 2014</h3>
        <h4>IBM <span>// Senior Technical Consultant</span></h4>
        <p>Worked with clients such as DTE Energy, Customs and Border Protection Agency, and the United States Army.  Built a frontend rate calculator for DTE Energy using Twitter’s Bootstrap.  Rewrote an outdated Tririga Application for Customs and Border Protection Agency to create a live training learning management system using Microsoft ASP, Zurb’s Foundation, and integrated with Adobe Connect.  Develop and implement course templates using web-based technologies including HTML, CSS, XML, Adobe Flash and JavaScript for a simple exam and course deployment for instructors. Maintain Git repositories for in-progress development among several team members.</p>

        <h3>2007 - 2008</h3>
        <h4>Cubic Corporation <span>// Web Course Developer</span></h4>
        <p>Created and sustained course content and exams on the Joint Forces Command Learning Management System.  The courses were developed using Adobe Flash, ActionScript 2.0 and 3.0, HTML, CSS, XML, JavaScript and SCORM 2004.</p>

        <p className="note">*References available upon request.</p>

        <h2>Additional Accomplishments</h2>
        <ul>
          <li>Spring 2017 - Co-Chaired/Coordinated Dominion Enterprises Student Hackathon</li>
          <li>Summer 2017 - Chaired/Coordinated Dominion Enterprises Internal Hackathon</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}
