import React from "react";
import doctor from "../Assets/Doctor.png";
import "./Home.css";
import square from "../Assets/Square.png";
import retangle from "../Assets/retangle.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import background from "../Assets/background.jpg";
import Bannar from "../Components/Bannar/Bannar";
export default function Home() {
  return (
    <header style={{ backgroundImage: `url(${background})` }}>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-lg-8">
            <h5>We Provide All Health Care Solution</h5>
            <h2>
              Protect Your Health And <br />
              Take Care To Of Your Health
            </h2>
            <button>
              <a href="a"> Read More</a>
            </button>
            <img src={retangle} className="retangle"></img>
          </div>
          <div class="col-md-4 col-lg-4">
            <div class="box">
              <img src={doctor}></img>
              {/* <FontAwesomeIcon icon={faSquare} className="phone" /> */}
              <img src={square} className="square"></img>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
