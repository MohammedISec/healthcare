import React from "react";
import Bannar from "../Components/Bannar/Bannar";
import "./Contact.css";
import contact from "../Assets/contact.jpg";
import facebook from "../Assets/Facebook.png";
import twitter from "../Assets/twitter.png";
import instagram from "../Assets/instagram.png";
import linkedin from "../Assets/link.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarth,
  faIndent,
  faMailBulk,
  faMailReply,
  faMap,
} from "@fortawesome/free-solid-svg-icons";
export default function Contact() {
  return (
    <>
      <Bannar page="Contact Us" />

      <section className="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <form className="contact-form">
                <h2>Contact Us</h2>

                <input type="text" id="name" placeholder="Your Name" />

                <input type="email" id="email" placeholder="Email" />
                <input type="phone" id="phone" placeholder="Phone" />
                <select id="subject" placeholder="Select Department">
                  <option value="0">Select Department</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>

                <textarea id="message" placeholder="Typr Message" />

                <button type="submit">Submit</button>
              </form>
            </div>
            <div className="col-lg-6 col-md-6">
              <div
                className="contact-info"
                style={{ backgroundImage: `url(${contact})` }}
              >
                <div className="info">
                  <h2>Contact Us For Any Informations</h2>
                  <div className="info-details">
                    <FontAwesomeIcon icon={faMap} />
                    <h4>Location</h4>
                  </div>
                  <hr />
                  <p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>

                  <div className="info-details">
                    <FontAwesomeIcon icon={faIndent} />
                    <h4>Email & Phone</h4>
                  </div>
                  <hr />
                  <p> M7mdm.khalid@gmail.com </p>
                  <p>(+971) 552899095</p>

                  <div className="info-details">
                    <FontAwesomeIcon icon={faEarth} />
                    <h4>Follow Us</h4>
                  </div>
                  <hr />
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
