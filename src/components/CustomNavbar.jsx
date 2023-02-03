import { Component } from "react";
import { Navbar, Nav, Dropdown, NavDropdown } from "react-bootstrap";
import navLogo from "../assets/netflix_logo.png";
import navIcon from "../assets/avatar.png";
import { BiSearch } from "react-icons/bi";
import { MdNotifications } from "react-icons/md";

class CustomNavbar extends Component {
  render() {
    return (
      <>
        <Navbar variant="dark" className="text-white" expand="md">
          <Navbar.Brand href="#">
            <img className="navLogo w-100" src={navLogo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
            <Nav className="ml-auto d-flex justify-content-center align-items-center">
              <Nav.Link
                className="d-flex justify-content-center align-items-center"
                href="#home"
              >
                <BiSearch />
              </Nav.Link>
              <Nav.Link href="#home">KIDS</Nav.Link>
              <Nav.Link
                className="d-flex justify-content-center align-items-center"
                href="#home"
              >
                <MdNotifications />
              </Nav.Link>
              <NavDropdown
                variant="outline-secondary"
                alignRight
                title={
                  <img
                    className="navIcon image-fluid"
                    src={navIcon}
                    alt="navIcon"
                  />
                }
                id="navDropdown"
              >
                <Dropdown.Item
                  className="border-bottom border-dark"
                  eventKey="1"
                >
                  Back Office
                </Dropdown.Item>
                <Dropdown.Item eventKey="2">Account</Dropdown.Item>
                <Dropdown.Item eventKey="3">Edit Profile</Dropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default CustomNavbar;
