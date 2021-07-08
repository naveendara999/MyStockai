import React from "react";
import { Link } from "react-router-dom";
import { Row } from "reactstrap";
import logo from "./../Assets/images/Logo.svg";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
const Login = () => {
  return (
    <div className="login">
      <Row className="login_container">
        <div className="auth-card shadow p-4">
          <div className="logo_image mb-3">
            <img src={logo} alt="" width="200" />
          </div>
          <div>
            <h3 className="mb-2">Log in</h3>
            <p className="subtitle">
              Don't have an account? <Link to={"/signup"}>Sign up</Link>
            </p>
          </div>
          <Form>
            <FormGroup className="mt-3 ">
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Email address"
              />
            </FormGroup>
            <FormGroup className="mt-3">
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Password "
              />
            </FormGroup>
            <FormGroup check className="mt-3">
              <Label check>
                <Input type="checkbox" />
                Remember me
              </Label>
            </FormGroup>
          </Form>
          <Link to="/toplist">
            <Button className="mt-3" color="primary" size="lg">
              Submit
            </Button>
          </Link>
          <p className="agreeto">
            <Link to="https://www.MyStock.ai/terms.html" target="_blank">
              Terms
            </Link>
            By clicking Sign In, you agree to our and have read and acknowledge
            our
            <Link to="https://www.MyStock.ai/privacy.html" target="_blank">
              US Privacy Statement
            </Link>
            .
          </p>
          <hr />
          <div className="capcha">
            <span>
              Invisible reCAPTCHA by Google
              <Link
                to="https://www.google.com/intl/en/policies/privacy/"
                target="_blank"
              >
                Privacy Policy
              </Link>
              and
              <Link
                to="https://www.google.com/intl/en/policies/terms/"
                target="_blank"
              >
                Terms of Use
              </Link>
              .
            </span>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default Login;
