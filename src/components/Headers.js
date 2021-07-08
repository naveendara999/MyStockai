import React from 'react';
import { Navbar, NavbarBrand, Nav, Collapse } from 'reactstrap';
import logo from './../Assets/images/Logo.png';
import { Button } from '../components/Button';

export const Headers = () => {
  return (
    <div className='header'>
      <Navbar color='light' light expand='md'>
        <NavbarBrand href='/' style={{ width: '50%', textAlign: 'left' }}>
          <img
            alt=''
            src={logo}
            style={{ objectFit: 'contain', width: '200px' }}
          />
        </NavbarBrand>
        <Collapse navbar>
          <Nav className='mr-auto' navbar style={{ width: '100%' }}>
            <div
              style={{ width: '100%', textAlign: 'right' }}
              className='my-2  '
            >
              <Button
                buttonText='Create account
'
              />
              <Button buttonText='Login' />
            </div>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
