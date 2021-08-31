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
import { Link, Redirect, useHistory } from "react-router-dom";
import { Button as Btn } from "../Button";
import * as AppActions from "../../redux/actions/appActions";
import { useDispatch } from "react-redux";
import moment from "moment-timezone";

export const HomeHeaders = () => {
  let today = new moment.tz("America/New_York").format("DD/MM/YYYY");
  // let today = new Date().toLocaleDateString();
  const [collapsed, setCollapsed] = useState(true);
  const history = useHistory();
  const toggleNavbar = () => setCollapsed(!collapsed);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  console.log(window.location.pathname);

  const logout = () => {
    localStorage.removeItem("UserAuthenticated");
    history.push("/login");
  };

  const UserAuthenticated = localStorage.getItem("UserAuthenticated");
  const dispatch = useDispatch();
  if (!UserAuthenticated) {
    return <Redirect to="/login" />;
  }

  const searchHandler = (text) => {
    dispatch(AppActions.searchAction(text));
  };

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
            <NavItem
              className={window.location.pathname == "/toplist" && "active_nav"}
            >
              <Link to="/toplist"> Home</Link>
            </NavItem>
            {/* <NavItem
              className={window.location.pathname == "/ideas" && "active_nav"}
            >
              <Link to="/ideas"> Ideas</Link>
            </NavItem>
            <NavItem
              className={
                window.location.pathname == "/transaction" && "active_nav"
              }
            >
              <Link to="/transaction">Transactions</Link>
            </NavItem> */}
          </Nav>
          <Nav className="ml-auto" style={{ width: "100%" }} navbar>
            <div
              style={{
                display: "flex",
                marginLeft: "auto",
                maxWidth: "320px",
                width: "100%",
                gap: "1rem",
              }}
            >
              <Input
                placeholder="Search - Stock Symbol Name"
                onChange={(e) => searchHandler(e.target.value)}
              />
              <FontAwesomeIcon icon={faUserCircle} size="3x" color="gray" />
            </div>
          </Nav>
          <span className="mx-2" ju>
            <Btn
              buttonText={"Logout"}
              onClick={logout}
              style={{ padding: "5px 10px", paddingTop: "3px" }}
            />
          </span>
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
