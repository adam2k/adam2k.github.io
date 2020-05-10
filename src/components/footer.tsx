import React, { useState } from "react"
import EmailIcon from "@material-ui/icons/Email"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import BookIcon from "@material-ui/icons/Book"
import ForumIcon from "@material-ui/icons/Forum"


function Footer(props) {
  const partyTime = "Party Time!";
  const relax = "Whoa! Relax";
  const [partyDialogue, setPartyDialogue] = useState(partyTime)

  function handleClick(e) {
    e.preventDefault();
    setPartyDialogue(props.isCrazy ? partyTime : relax);
    props.onClick(e.target.value);
  }

  return (
      <footer>
        <div className="inner-footer">
          <ul>
            <li>
                <a href="mailto:avandover@gmail.com">
                  <div>
                    <EmailIcon />
                    <span>email</span>
                  </div>
                </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/avandover" target="_blank">
                <div>
                  <LinkedInIcon />
                  <span>linkedin</span>
                </div>
              </a>
            </li>
            <li>
              <a href="https://www.github.com/adam2k" target="_blank">
                <div>
                  <GitHubIcon />
                  <span>github</span>
                </div>
              </a>
            </li>
            <li>
                <a href="https://teamtreehouse.com/adam2k" target="_blank">
                  <div>
                    <BookIcon />
                    <span>Team Treehouse</span>
                  </div>
                </a>
            </li>
            <li>
              <a
                href="https://stackoverflow.com/users/1008875/adam2k"
                target="_blank"
              >
                <div>
                  <ForumIcon />
                  <span>stackoverflow</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <p>
          © {new Date().getFullYear()}{" "}
          <a href="https://adam2k.com">adam2k.com</a>.
          {" "}
          <span className="hide-on-mobile">Ready to get Crazy? <a href="#" onClick={handleClick}>{partyDialogue}</a></span>
        </p>
      </footer>
    // )
  // };
  );
}

export default Footer
