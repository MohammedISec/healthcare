import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../Assets/Logo.png";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faSearch } from "@fortawesome/free-solid-svg-icons";
import background from "../../Assets/background.jpg";
import { Link } from "react-router-dom";
function Navbars() {
  return (
    <Navbar expand="lg" style={{ backgroundImage: `url(${background})` }}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} title="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>

            {/* ///////Pages//////// */}
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Our Team</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">FAQ's</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Booking </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.5">Error 404</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.6">
                Login / Register
              </NavDropdown.Item>
            </NavDropdown>
            {/* /////////Pages//////// */}
            {/* =======Services =======*/}
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Service</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                Service Details
              </NavDropdown.Item>
            </NavDropdown>
            {/* =======Services =======*/}

            {/* ======Blog======= */}
            <NavDropdown title="Blog" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Blogs</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                Blog Details
              </NavDropdown.Item>
            </NavDropdown>
            {/* ======Blog======= */}
            <Nav.Link to="/contact">Contact US</Nav.Link>
            {/* <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link> */}
            {/* <Link to="/contact">Contact US</Link> */}
            <Nav.Link href="#Search">
              <FontAwesomeIcon icon={faSearch} />
            </Nav.Link>
            <Nav.Link href="#Call Us">
              <FontAwesomeIcon icon={faPhone} /> +971552899095
            </Nav.Link>
            <Nav.Link href="#Contact Us">
              <button>
                Contact US <span> {">"} </span>
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
