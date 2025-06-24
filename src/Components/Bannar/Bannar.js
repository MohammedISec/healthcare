import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import background from "../../Assets/bannarBackground.jpg";
import "./Bannar.css";
export default function Bannar({ page }) {
  return (
    <section
      className="bannar"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <h2>{page}</h2>
            <li>
              <Link to="/home">
                <FontAwesomeIcon icon={faHome} /> Home
              </Link>
              / {page}
            </li>
          </div>
        </div>
      </div>
    </section>
  );
}
