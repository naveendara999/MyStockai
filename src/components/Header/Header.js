import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
} from "reactstrap";
import logo from "../../Assets/images/colorLogo.png";
import menu from "../../Assets/images/menu.svg";
import { Button } from "../Button";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const history = useHistory();

  return (
    <div className="header">
      <Navbar color="light" expand="lg" style={{ padding: "0.5rem 1rem" }}>
        <NavbarBrand>
          <Link to="/" style={{ textDecoration: "none" }}>
            <img src={logo} alt="" width="200" />
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle}>
          <span className="navbar-toggler-icon">
            <img src={menu} alt="" />
          </span>
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav style={{ marginLeft: "auto" }} navbar>
            <NavLink href="">
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <Button buttonText="Create account" />
              </Link>
            </NavLink>

            <NavLink href="" onClick={() => history.push("/login")}>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button buttonText="Login" />
              </Link>
            </NavLink>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
