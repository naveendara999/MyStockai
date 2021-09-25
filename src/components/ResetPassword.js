import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row } from "reactstrap";
import logo from "./../Assets/images/colorLogo.png";
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import validator from "validator";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import * as AuthActions from "../redux/actions/authActions";
import * as AppActions from "../redux/actions/appActions";
const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const ResetPassword = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [loading, setLoading] = useState(false);

  const [resetData, setresetData] = useState({
    email: "",
    pass: "",
    confirmPass: "",
  });

  const dispatch = useDispatch();
  const allData = useSelector((state) => state);
  const state = useSelector((state) => state.authData.emailVerificationData);
  const value = useSelector((state) => state.authData.emailVerificationData);

  const updatePass = useSelector((state) => state.authData.passwordResetData);

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

  const passwordValidate = (value) => {
    if (value.length < 8) {
      return (
        <div className="alert alert-danger" role="alert">
          Please Enter Minimum 8 characters long.
        </div>
      );
    }
  };

  // const onChangeemailid = (e) => {
  //   const emailid = e.target.value;
  //   setemailid(emailid);
  // };

  const handleChange = (e) => {
    setresetData({
      ...resetData,
      [e.target.name]: e.target.value,
    });
  };

  // if (value.isSuccess && value.Login && loading) {
  //   setLoading(false);
  //   localStorage.setItem("UserAuthenticated", value.Login);
  //   localStorage.setItem("UserEmail", emailid);
  //   <Redirect to="/toplist" />;
  // } else if (value.isSuccess && !value.Login && loading) {
  //   setLoading(false);
  //   // alert(value.Message);
  // }

  const handleForgetPassword = (e) => {
    e.preventDefault();
    setLoading(true);
    form.current.validateAll();
    if (resetData.email.length > 0) {
      dispatch(AuthActions.emailVerificationAction(resetData.email));
    } else {
      setLoading(false);
    }
  };

  const handlelogin = () => {
    history.push("/login");
  };

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    setLoading(true);
    form.current.validateAll();
    if (resetData.email.length > 0 && resetData.confirmPass.length >= 8) {
      dispatch(AuthActions.passwordResetAction(resetData));
    } else {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    dispatch(AppActions.clearReducerAction());
  }, []);

  // const UserAuthenticated = localStorage.getItem("UserAuthenticated");

  // if (UserAuthenticated) {
  //   return <Redirect to="/toplist" />;
  // }

  return (
    <div className="login">
      <Row className="login_container">
        <div className="auth-card shadow p-4">
          <div className="logo_image mb-3">
            <Link to="/">
              <img src={logo} alt="" width="200" />
            </Link>
          </div>
          <div>
            <h3 className="mb-2">Forget Password?</h3>
            <p className="subtitle">
              Go back to <Link to={"/login"}>Login</Link>
            </p>
          </div>
          <Form
            onSubmit={
              allData.authData.passwordResetData.isSuccess &&
              allData.authData.passwordResetData.Message === "Password reset"
                ? handlelogin
                : state.Status === 1
                ? handlePasswordUpdate
                : handleForgetPassword
            }
            ref={form}
          >
            <div className="form-group mt-3">
              <Input
                id="exampleEmail"
                type="text"
                className="form-control"
                name="email"
                value={resetData.email}
                onChange={handleChange}
                validations={[required, email]}
                placeholder="Email address"
              />
            </div>

            {state && state.Status === 1 && (
              <>
                <div className="form-group mt-3 ">
                  <Input
                    className="form-control"
                    type="text"
                    required
                    name="pass"
                    id="pass"
                    placeholder="Enter One Time Password..."
                    value={resetData.pass}
                    validations={[required, passwordValidate]}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group mt-3 ">
                  <Input
                    className="form-control"
                    required
                    type="confirmPass"
                    name="confirmPass"
                    id="exampleconfirmPass"
                    placeholder="Enter Your New Password..."
                    validations={[required, passwordValidate]}
                    value={resetData.confirmPass}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}

            <CheckButton style={{ display: "none" }} ref={checkBtn} />

            <div className="form-group">
              <button
                className="btn btn-primary btn-block btn-lg  mt-3"
                style={{ width: "100%" }}
                disabled={state.isLoading || updatePass.isLoading}
              >
                {(state.isLoading || updatePass.isLoading) && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                {allData.authData.passwordResetData.isSuccess &&
                allData.authData.passwordResetData.Message ===
                  "Password reset" ? (
                  <span>Login</span>
                ) : (
                  <span>Submit</span>
                )}
              </button>
            </div>

            {value.isSuccess &&
              (value.Status ? (
                <div className="form-group">
                  <div className="alert alert-success" role="alert">
                    {updatePass.isSuccess ? updatePass.Message : value.Message}
                  </div>
                </div>
              ) : (
                // <div className="form-group">
                //   <div className="alert alert-success" role="alert">
                //     {value.Message}
                //   </div>
                // </div>
                // <div className="form-group">
                //   <div className="alert alert-success" role="alert">
                //     {value.Message}
                //   </div>
                // </div>
                ""
              ))}
          </Form>
          {/* <Form onSubmit={handleForgetPassword} ref={form}>
            <div className="form-group mt-3 ">
              <Input
                className="form-control"
                type="text"
                name="otp"
                id="otp"
                placeholder="Please Enter One Time Password..."
                value={resetData.otp}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mt-3 ">
              <Input
                className="form-control"
                type="text"
                required
                name="pass"
                id="pass"
                placeholder="Enter New Password..."
                value={resetData.pass}
                validations={[required, passwordValidate]}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mt-3 ">
              <Input
                className="form-control"
                required
                type="confirmPass"
                name="confirmPass"
                id="exampleconfirmPass"
                placeholder="Enter Confirm Password..."
                validations={[required, passwordValidate]}
                value={resetData.confirmPass}
                onChange={handleChange}
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
                <span>Submit</span>
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
          </Form> */}
        </div>
      </Row>
    </div>
  );
};

export default ResetPassword;
