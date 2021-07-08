import React from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'reactstrap';
import logo from './../Assets/images/Logo.png';
import { Button, Form, FormGroup, Input, FormText } from 'reactstrap';

const Signup = () => {
  return (
    <div className='signup'>
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
      <Row className='login_container my-2'>
        <div className='auth-card shadow p-4'>
          <div className='logo_image mb-3'>
            <img src={logo} alt='' width='200' />
          </div>
          <div>
            <h3 className='mb-2'>Sign up</h3>
            <p className='subtitle'>
              Already have an account? <Link to={'/login'}>Log in</Link>
            </p>
          </div>
          <Form>
            <FormGroup className='mt-3 '>
              <Input
                type='text'
                name='displayname'
                id='displayname'
                placeholder='Display Name'
              />
            </FormGroup>
            <FormGroup className='mt-3 '>
              <Input
                type='email'
                name='email'
                id='exampleEmail'
                placeholder='Email address'
              />
            </FormGroup>
            <FormGroup className='mt-3 '>
              <Input
                type='text'
                name='phonenumber'
                id='phonenumber'
                placeholder='Phone (recommended)'
              />
              <FormText color='muted'>
                Standard call, messaging or data rates may apply.
              </FormText>
            </FormGroup>

            <FormGroup className='mt-3'>
              <Input
                type='password'
                name='password'
                id='examplePassword'
                placeholder='Password '
              />
            </FormGroup>
          </Form>
          <Button className='mt-3' color='primary' size='lg'>
            Submit
          </Button>
          <p className='agreeto'>
            <Link to='https://www.liste.ai/terms.html' target='_blank'>
              Terms
            </Link>
            By clicking Sign In, you agree to our and have read and acknowledge
            our
            <Link to='https://www.liste.ai/privacy.html' target='_blank'>
              US Privacy Statement
            </Link>
            .
          </p>
          <hr />
          <div className='capcha'>
            <span>
              Invisible reCAPTCHA by Google
              <Link
                to='https://www.google.com/intl/en/policies/privacy/'
                target='_blank'
              >
                Privacy Policy
              </Link>
              and
              <Link
                to='https://www.google.com/intl/en/policies/terms/'
                target='_blank'
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
