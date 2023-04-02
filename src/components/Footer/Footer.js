import React from "react";
import "./Footer.css";
import insta from "../../images/insta.svg";
import linkedin from "../../images/linkedin.svg";

const leftfooter_data = [
  "Prompt Generator",
  "Amaan Daily",
  "All Contributors",
  "Your Data on Amaan.io",
  "Contribute to Amaan",
];

function Footer({ name }) {
  return (
    <>
      <div class="footer">
        <div className="left-footer">
          {leftfooter_data.map((data) => {
            return (
              <>
                <div>{data}</div>
              </>
            );
          })}
        </div>
        <div class="right-footer">
          <ul>
            <li>{name}.io</li>
            <li>Made with love in India</li>
            <li>
              <img src={insta} alt="" />
              <img src={linkedin} alt="" />
            </li>
            <li className="takespace"></li>
            <li>hello@{name}.io</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
