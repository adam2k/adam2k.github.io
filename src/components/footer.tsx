import React from "react"
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import BookIcon from '@material-ui/icons/Book';
import ForumIcon from '@material-ui/icons/Forum';

const Footer = () => (
  <footer>
   <div className="inner-footer">
        <ul>
            <li>
                <a href="mailto:avandover@gmail.com">
                <EmailIcon />
                <span>email</span>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/avandover" target="_blank">
                <LinkedInIcon />
                <span>linkedin</span>
                </a>
            </li>
            <li>
                <a href="https://www.github.com/adam2k" target="_blank">
                <GitHubIcon />
                <span>github</span>
                </a>
            </li>
            <li>
                <a href="https://teamtreehouse.com/adam2k" target="_blank">
                <BookIcon />
                <span>Team Treehouse</span>
                </a>
            </li>
            <li>
                <a href="https://stackoverflow.com/users/1008875/adam2k" target="_blank">
                <ForumIcon />
                <span>stackoverflow</span>
                </a>
            </li>
        </ul>
        <p>
            © {new Date().getFullYear()} <a href="https://adam2k.com">adam2k.com</a>
            {` `}
            built with <a href="https://www.gatsbyjs.org">Gatsby</a>
        </p>
    </div>
  </footer>
)

export default Footer