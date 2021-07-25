import React from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Row } from "reactstrap";
import logo from "./../Assets/images/Logo.svg";
import { Button, FormGroup, FormText } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import * as AuthActions from "../redux/actions/authActions";
import validator from "validator";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

const Signup = () => {
  const form = React.useRef();
  const checkBtn = React.useRef();

  const [account, setaccount] = React.useState({
    firstname: "",
    lastname: "",
    age: "",
    email: "",
    phonenumber: "",
    password: "",
  });
  const [validate, setvalidate] = React.useState({
    firstname: false,
    lastname: false,
    age: false,
    email: false,
    phonenumber: false,
    password: false,
  });

  const [loading, setLoading] = React.useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const value = useSelector((state) => state.authData.signupData);
  const handleChange = (e) => {
    setaccount({
      ...account,
      [e.target.name]: e.target.value,
    });
    setvalidate({
      firstname: false,
      lastname: false,
      age: false,
      email: false,
      phonenumber: false,
      password: false,
    });
  };

  const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };

  const email = (emailid) => {
    if (!validator.isEmail(emailid)) {
      return (
        <div className="alert alert-danger" role="alert">
          {emailid} is not a valid email.
        </div>
      );
    }
  };

  const age = (value) => {
    if (value.length != 2) {
      return (
        <div className="alert alert-danger" role="alert">
          Please Enter 2 Digit Number Ex: 21, 23
        </div>
      );
    }
  };

  const phone = (value) => {
    if (value != "" && value.length != 11) {
      return (
        <div className="alert alert-danger" role="alert">
          Please Enter 11 digit phone number Ex- 0(213)121221
        </div>
      );
    }
  };

  const password = (value) => {
    if (value.length < 8) {
      return (
        <div className="alert alert-danger" role="alert">
          Please Enter Minimum 8 characters long.
        </div>
      );
    }
  };

  if (value.isSuccess && value.Message === "Registerd" && loading) {
    setLoading(false);
    console.log("Register but not redirect");
    history.push("/login");
  } else if (value.isSuccess && loading) {
    setLoading(false);
  }

  const handleSignup = (e) => {
    e.preventDefault();
    form.current.validateAll();
    if (
      account.email.length > 0 &&
      account.password.length >= 8 &&
      account.firstname.length > 0 &&
      account.age.length === 2
    ) {
      setLoading(true);
      dispatch(AuthActions.signupAction(account));
    } else {
      setLoading(false);
    }
  };
  return (
    <div className="signup">
      {/* <div
        style={{
          position: 'fixed',
          background: 'gray',
          minheight: '46px',
          width: '100vw',
          top: '0',
        }}
      >
        a
      </div> */}
      <Row className="login_container my-2">
        <div className="auth-card shadow p-4">
          <div className="logo_image mb-3">
            <img src={logo} alt="" width="200" />
          </div>
          <div>
            <h3 className="mb-2">Sign up</h3>
            <p className="subtitle">
              Already have an account? <Link to={"/login"}>Log in</Link>
            </p>
          </div>
          <Form onSubmit={handleSignup} ref={form}>
            <div className="form-group mt-3 ">
              <Input
                className="form-control"
                required
                type="text"
                name="firstname"
                id="firstname"
                placeholder="First Name"
                value={account.firstname}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mt-3 ">
              <Input
                className="form-control"
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Last Name"
                value={account.lastname}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mt-3 ">
              <Input
                className="form-control"
                type="number"
                required
                name="age"
                id="age"
                placeholder="Age"
                validations={[required, age]}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mt-3 ">
              <Input
                className="form-control"
                required
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Email address"
                validations={[required, email]}
                value={account.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mt-3 ">
              <Input
                className="form-control"
                type="number"
                name="phonenumber"
                id="phonenumber"
                placeholder="Phone number without country code"
                value={account.phonenumber}
                validations={[phone]}
                onChange={handleChange}
              />
              <FormText color="muted">
                Standard call, messaging or data rates may apply.
              </FormText>
            </div>

            <div className="form-group mt-3">
              <Input
                required
                className="form-control"
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Password "
                value={account.password}
                validations={[required, password]}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <button
                className="btn btn-primary btn-block btn-lg  mt-3"
                style={{ width: "100%" }}
                disabled={loading}
              >
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Sign up</span>
              </button>
            </div>

            {value.isSuccess &&
              (value.isSuccess && value.Message === "Registerd" ? (
                <div className="form-group">
                  <div className="alert alert-success" role="alert">
                    {value.Message}
                  </div>
                </div>
              ) : (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {value.Message}
                  </div>
                </div>
              ))}
          </Form>
          {/* <Button
            className="form-group mt-3"
            color="primary"
            size="lg"
            onClick={handleSignup}
          >
            Submit
          </Button> */}
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

export default Signup;
