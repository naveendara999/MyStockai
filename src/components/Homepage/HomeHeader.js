import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  Collapse,
  Input,
  NavItem,
  NavbarToggler,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
} from "reactstrap";
import { Button } from "react-bootstrap";

import logo from "../../Assets/images/Logo.svg";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const HomeHeaders = () => {
  let today = new Date().toLocaleDateString();
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="header">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <img
            alt=""
            src={logo}
            style={{ objectFit: "contain", width: "200px" }}
          />
        </NavbarBrand>
        <NavbarToggler className="mr-2" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon">
            {/* <img src={menu} alt='' /> */}
          </span>
        </NavbarToggler>
        <Collapse navbar isOpen={!collapsed} className="float-xs-none">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/toplist"> Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/ideas"> Ideas</Link>
            </NavItem>
            <NavItem>
              <Link to="/transaction">Transactions</Link>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" style={{ width: "100%" }} navbar>
            <div
              style={{
                display: "flex",
                marginLeft: "auto",
                maxWidth: "320px",
                width: "100%",
                marginRight: "1rem",
                gap: "1rem",
              }}
            >
              <Input placeholder="Search - Symbol/Company Name" />
              <FontAwesomeIcon icon={faUserCircle} size="2x" color="gray" />
            </div>
          </Nav>
        </Collapse>
      </Navbar>
      <div className="subnav py-2 px-5">
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div className="p-0  left ">
            <div className="closeofdate">
              Data & Analysis updates as of close of Market :
              <span>{today}</span>
            </div>
          </div>
          <div className="p-0 right">
            <div>
              <Button variant="outline-primary" onClick={toggle}>
                Leave us a comment
              </Button>
              <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                  Thank you for the feedback !
                </ModalHeader>
                <ModalBody>
                  <FormGroup>
                    <Input
                      style={{ minHeight: "150px" }}
                      type="textarea"
                      name="text"
                      id="exampleText"
                      placeholder="Add your feedback here ..."
                    />
                  </FormGroup>
                </ModalBody>
                <ModalFooter>
                  <Button variant="secondary" size="sm" onClick={toggle}>
                    Close
                  </Button>
                  <Button variant="primary" size="sm" onClick={toggle}>
                    Update
                  </Button>
                </ModalFooter>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
