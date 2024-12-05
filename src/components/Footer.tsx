import logoedit from "../../images/logo-edit.svg";
import facebook from "../../images/icon-facebook.svg";
import facebookHover from "../../images/icon-Hover-facebook.svg";
import youtube from "../../images/icon-youtube.svg";
import youtubeHover from "../../images/icon-Hover-youtube.svg";
import twitter from "../../images/icon-twitter.svg";
import twitterHover from "../../images/icon-Hover-twitter.svg";
import pinterest from "../../images/icon-pinterest.svg";
import pinterestHover from "../../images/icon-Hover-pinterest.svg";
import Instagram from "../../images/icon-instagram.svg";
import InstagramHover from "../../images/icon-Hover-instagram.svg";
import { useRef } from "react";

export default function Footer() {
  const input = useRef<HTMLInputElement>(null);

  return (
    <footer>
      <div className="container">
        {/*  Start logo and links */}
        <div className="logo-links">
          <img src={logoedit} alt="" />
          <ul className="sociles">
            <li>
              <img
                src={facebook}
                alt=""
                onMouseOver={(e) => {
                  e.currentTarget.src = facebookHover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.src = facebook;
                }}
              />
            </li>
            <li>
              <img
                src={youtube}
                alt=""
                onMouseOver={(e) => {
                  e.currentTarget.src = youtubeHover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.src = youtube;
                }}
              />
            </li>
            <li>
              <img
                src={twitter}
                alt=""
                onMouseOver={(e) => {
                  e.currentTarget.src = twitterHover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.src = twitter;
                }}
              />
            </li>
            <li>
              <img
                src={pinterest}
                alt=""
                onMouseOver={(e) => {
                  e.currentTarget.src = pinterestHover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.src = pinterest;
                }}
              />
            </li>
            <li>
              <img
                src={Instagram}
                alt=""
                onMouseOver={(e) => {
                  e.currentTarget.src = InstagramHover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.src = Instagram;
                }}
              />
            </li>
          </ul>
        </div>
        {/*  End logo and links */}
        {/* Start Links */}
        <div className="links-container">
          <ul className="links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
        </div>
        {/* End Links */}
        {/* Start links 2  */}
        <div className="links-container">
          <ul className="links">
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#"> Privacy Policy </a>
            </li>
          </ul>
        </div>
        {/* End links 2  */}
        {/* Start contact and copyRight */}
        <div className="Contact">
          <div
            className="contact-input"
            onFocus={() => {
              (
                document.querySelector(".Error") as HTMLSpanElement
              ).style.display = "none";
              (
                document.querySelector("input") as HTMLInputElement
              ).style.border = `1px solid #ccc`;
            }}
          >
            <input
              type="text"
              name=""
              id=""
              placeholder="Entre Email"
              ref={input}
            />
            <button
              className="go"
              onClick={() => {
                const regx = /\w+@\w+\.(com|org)/gi;
                const isMatch = input.current?.value as string;
                if (!regx.test(isMatch)) {
                  (
                    document.querySelector(".Error") as HTMLSpanElement
                  ).style.display = "block";
                  (
                    document.querySelector("input") as HTMLInputElement
                  ).style.border = "1px solid red";
                }
              }}
            >
              Go
            </button>
            <span className="Error">Please Insert a Valid Email</span>
          </div>
        </div>
        {/* End contact and copyRight */}
      </div>
    </footer>
  );
}
