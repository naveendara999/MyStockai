import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../../Assets/images/Logo.png';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';
const Footer = () => {
  return (
    <div className='footer'>
      <Container>
        <Row>
          <Col md={3}>
            <img src={logo} alt='' width='220' />
          </Col>
          <Col md={12} className='small disclaimer mt-4'>
            Disclaimer: Liste.ai provides general investment information and
            reports for informational and entertainment purposes ONLY and should
            not be construed as individualized financial advice. If you require
            such advice, you must contact a certified financial planner or other
            dedicated professional, so they can review your unique situation and
            tailor their advice to you. LISTE.AI, ITS OFFICERS, AND EMPLOYEES DO
            NOT WARRANT THE INFORMATION PROVIDED IN ANY WAY, WHETHER IMPLIED,
            EXPRESS, OR BY STATUTE; NOR GUARANTEE ACCURACY, COMPLETENESS, NOR
            TIMELINESS; NOR GUARANTEE THE ABSENCE OF ERRORS AND OMISSIONS; AND,
            SHALL NOT BE HELD LIABLE FOR ANY LOSS. Investments carry risk and
            may lose value. Before investing, you should be aware of the risks
            involved and take appropriate action to mitigate risk as necessary.
            Liste.ai does not provide tax, legal, or financial advice.
          </Col>
        </Row>
        <Row className='marginRow30'>
          <Col md={12}>
            <div className='footerlist'>
              <ul>
                <li>
                  <Link to='/'>Contact Us</Link>
                </li>
                <li>
                  <Link to='/'>Terms of Service</Link>
                </li>
                <li>
                  <Link to='/'>Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className='marginRow30'>
          <Col md={6}>
            <div className='copyright'>
              <p>
                <span>2021</span> MyStock.ai. All Rights Reserved. Copyright ©
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className='socialmedia'>
              <ul>
                <li>{<FaFacebookF />}</li>
                <li>
                  <FaTwitter />
                </li>
                <li>
                  <FaLinkedinIn />
                </li>
                <li>
                  <FaInstagram />
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
