import React from "react";
import "./Footer.css";
import logo from "../../Assets/Logo.png";
import facebook from "../../Assets/Facebook.png";
import twitter from "../../Assets/twitter.png";
import instagram from "../../Assets/instagram.png";
import linkedin from "../../Assets/link.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <img src={logo} className="logo" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatibus, quos, voluptates, voluptatibus.
            </p>
            <div className="footer-contact">
              <div className="footer-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="footer-text">
                <h6>Contact Us</h6>
                <h>+971552899095</h>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <h5>Quick Links</h5>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>

              <li>
                <a href="#">Booking</a>
              </li>

              <li>
                <a href="#">Faq's</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Out Team</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h5>Our Services</h5>
            <ul>
              <li>
                <a href="#">Dental Care</a>
              </li>
              <li>
                <a href="#">Cardiac Clinic</a>
              </li>

              <li>
                <a href="#">Massege Therapy</a>
              </li>

              <li>
                <a href="#">Cardiology</a>
              </li>
              <li>
                <a href="#">Precise Diagnosis</a>
              </li>
              <li>
                <a href="#">Abmbulance Services</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h5>Subcribe</h5>
            <form>
              <input type="email" placeholder="Email Address" />
              <button type="submit">Subcribe</button>
              <ul className="social-icons">
                <li>
                  <a href="www.facebook.com">
                    {/* <i className="facebook"> */}
                    <img src={facebook} />
                    {/* </i> */}
                  </a>
                </li>
                <li>
                  <a href="#">
                    {/* <i className="twitter"> */}
                    <img src={twitter} />
                    {/* </i> */}
                  </a>
                </li>
                <li>
                  <a href="#">
                    {/* <i className="instagram"> */}
                    <img src={instagram} />
                    {/* </i> */}
                  </a>
                </li>
                <li>
                  <a href="#">
                    {/* <i className="linkedin"> */}
                    <img src={linkedin} />
                    {/* </i> */}
                  </a>
                </li>
              </ul>
            </form>
          </div>
          <div className="col-md-3 col-sm-6"></div>
        </div>
      </div>
      <div className="footer-bottom">
        <hr />
        <p>
          Copyright © 2025 Design & Developed by{" "}
          <a
            href="https://mohammed-mustafa.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mohammed Mustafa
          </a>
        </p>
      </div>
    </footer>
  );
}
