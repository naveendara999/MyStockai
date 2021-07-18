import React from "react";
import { Link } from "react-router-dom";
import { Row } from "reactstrap";
import logo from "./../Assets/images/Logo.svg";
import { Button, Form, FormGroup, Input, FormText } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
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

  if (value.isSuccess && loading) {
    setLoading(false);
  }

  const handleSignup = (e) => {
    e.preventDefault();

    if (account.firstname.length === 0) {
      setvalidate({
        ...validate,
        firstname: true,
      });
    } else if (account.lastname.length === 0) {
      setvalidate({
        ...validate,
        lastname: true,
      });
    } else if (account.age.length < 2 || account.age.length > 2) {
      setvalidate({
        ...validate,
        age: true,
      });
    } else if (account.email.length === 0) {
      setvalidate({
        ...validate,
        email: true,
      });
    } else if (account.password.length === 0) {
      setvalidate({
        ...validate,
        password: true,
      });
    } else if (
      account.phonenumber.length < 10 ||
      account.phonenumber.length > 10
    ) {
      setvalidate({
        ...validate,
        phonenumber: true,
      });
    } else {
      setvalidate({
        firstname: false,
        lastname: false,
        age: false,
        email: false,
        phonenumber: false,
        password: false,
      });
    }

    if (
      account.email.length > 0 &&
      account.password.length > 0 &&
      account.firstname.length > 0 &&
      account.lastname.length > 0 &&
      account.age.length === 2 &&
      account.phonenumber.length === 10
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
            <FormGroup className="mt-3 ">
              <Input
                required
                type="text"
                name="firstname"
                id="firstname"
                placeholder="First Name"
                value={account.firstname}
                onChange={handleChange}
              />
            </FormGroup>
            {validate.firstname && (
              <div className="alert alert-danger" role="alert">
                This field is required!
              </div>
            )}
            <FormGroup className="mt-3 ">
              <Input
                required
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Last Name"
                value={account.lastname}
                onChange={handleChange}
              />
            </FormGroup>
            {validate.lastname && (
              <div className="alert alert-danger" role="alert">
                This field is required!
              </div>
            )}
            <FormGroup className="mt-3 ">
              <Input
                type="number"
                name="age"
                id="age"
                placeholder="Age"
                onChange={handleChange}
              />
            </FormGroup>
            {validate.age && (
              <div className="alert alert-danger" role="alert">
                Please Enter Your Age In 2 Digit Ex: 09, 25
              </div>
            )}
            <FormGroup className="mt-3 ">
              <Input
                required
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Email address"
                value={account.email}
                validations={[required]}
                onChange={handleChange}
              />
            </FormGroup>
            {validate.email && (
              <div className="alert alert-danger" role="alert">
                This field is required!
              </div>
            )}
            <FormGroup className="mt-3 ">
              <Input
                required
                type="number"
                name="phonenumber"
                id="phonenumber"
                placeholder="Phone number"
                value={account.phonenumber}
                onChange={handleChange}
              />
              <FormText color="muted">
                Standard call, messaging or data rates may apply.
              </FormText>
            </FormGroup>
            {validate.phonenumber && (
              <div className="alert alert-danger" role="alert">
                Please Enter Your 10 Digit Phone Number
              </div>
            )}
            <FormGroup className="mt-3">
              <Input
                required
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Password "
                value={account.password}
                onChange={handleChange}
              />
            </FormGroup>
            {validate.password && (
              <div className="alert alert-danger" role="alert">
                This field is required!
              </div>
            )}

            <div className="form-group">
              <button
                className="btn btn-primary btn-block btn-lg  mt-3"
                style={{ width: "100%" }}
                disabled={loading}
                onClick={handleSignup}
              >
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Submit</span>
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
            className="mt-3"
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
