import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row } from "reactstrap";
import logo from "./../Assets/images/logoStock.jpeg";
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import validator from "validator";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import * as AuthActions from "../redux/actions/authActions";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [emailid, setemailid] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const value = useSelector((state) => state.authData.loginData);

  const history = useHistory();

  const email = (emailid) => {
    if (!validator.isEmail(emailid)) {
      return (
        <div className="alert alert-danger" role="alert">
          {emailid} is not a valid email.;
        </div>
      );
    }
  };

  const onChangeemailid = (e) => {
    const emailid = e.target.value;
    setemailid(emailid);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  if (value.isSuccess && value.Login && loading) {
    setLoading(false);
    localStorage.setItem("UserAuthenticated", value.Login);
    <Redirect to="/toplist" />;
  } else if (value.isSuccess && !value.Login && loading) {
    setLoading(false);
    // alert(value.Message);
  }

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    form.current.validateAll();
    if (emailid.length > 0 && password.length >= 8) {
      dispatch(AuthActions.loginAction(emailid, password));
    } else {
      setLoading(false);
    }
  };

  const UserAuthenticated = localStorage.getItem("UserAuthenticated");

  if (UserAuthenticated) {
    return <Redirect to="/toplist" />;
  }
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
          <Form onSubmit={handleLogin} ref={form}>
            <div className="form-group mt-3">
              <Input
                id="exampleEmail"
                type="text"
                className="form-control"
                name="emailid"
                value={emailid}
                onChange={onChangeemailid}
                validations={[required, email]}
                placeholder="Email address"
              />
            </div>

            <div className="form-group mt-3">
              <Input
                id="examplePassword_"
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={onChangePassword}
                validations={[required]}
                placeholder="Password"
              />
            </div>

            <CheckButton style={{ display: "none" }} ref={checkBtn} />

            <div className="form-group">
              <button
                className="btn btn-primary btn-block btn-lg  mt-3"
                style={{ width: "100%" }}
                disabled={loading}
              >
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
            </div>

            {value.isSuccess &&
              (value.Login ? (
                ""
              ) : (
                // <div className="form-group">
                //   <div className="alert alert-success" role="alert">
                //     {value.Message}
                //   </div>
                // </div>
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {value.Message}
                  </div>
                </div>
              ))}
          </Form>
          <p className="agreeto">
            <Link to="https://www.liste.ai/terms.html" target="_blank">
              Terms
            </Link>
            By clicking Sign In, you agree to our and have read and acknowledge
            our
            <Link to="https://www.liste.ai/privacy.html" target="_blank">
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

          {/* <Form>
            <FormGroup className='mt-3 '>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Email address"
              />
            </FormGroup>
            <FormGroup className="mt-3">
              <Input
                type='password_'
                name='password_'
                id='examplePassword_'
                placeholder='Password_ '
              />
            </FormGroup>
            <FormGroup check className="mt-3">
              <Label check>
                <Input type="checkbox" />
                Remember me
              </Label>
            </FormGroup>
          </Form> */}
          {/* <Button className='mt-3' color='primary' size='lg'>
            Submit
          </Button>
          <p className='agreeto'>
            <Link to='https://www.liste.ai/terms.html' target='_blank'>
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
          </div> */}
        </div>
      </Row>
    </div>
  );
};

export default Login;
