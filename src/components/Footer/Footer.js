import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../Assets/images/colorLogo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col md={3}>
            <img src={logo} alt="" width="220" />
          </Col>
          <Col md={12} className="small disclaimer mt-4">
            <strong> Disclaimer: </strong> MystockAI.com provides general
            investment information and reports for informational and
            entertainment purposes ONLY and should not be construed as
            individualized financial advice. If you require such advice, you
            must contact a certified financial planner or other dedicated
            professional, so they can review your unique situation and tailor
            their advice to you.
            <br />
            <br />
            MyStockAI.com, ITS OFFICERS, AND EMPLOYEES DO NOT WARRANT THE
            INFORMATION PROVIDED IN ANY WAY, WHETHER IMPLIED, EXPRESS, OR BY
            STATUTE; NOR GUARANTEE ACCURACY, COMPLETENESS, NOR TIMELINESS; NOR
            GUARANTEE THE ABSENCE OF ERRORS AND OMISSIONS; AND, SHALL NOT BE
            HELD LIABLE FOR ANY LOSS. Investments carry risk and may lose value.
            Before investing, you should be aware of the risks involved and take
            appropriate action to mitigate risk as necessary. MyStockAI.com does
            not provide tax, legal, or financial advice.
          </Col>
          <Col md={12} className="small disclaimer mt-4">
            <strong>About Us:</strong> MyStockAI uses AI deep learning
            algorithms for stock price prediction. MyStockAI is one of the many
            AI products from Kalpra Tech Solutions, a TX based start-up from
            USA. The revolution in AI and the availability of huge volumes of
            historical data (for the last 5-10 years stock prices) helps the
            analysts and individual stock traders to take better decisions. At
            MyStockAI, our main value is the intellectual honesty. Our results
            and performances are not biased. Any signal provided by
            AIStockFinder will remain in its database, having been an
            unsuccessful trade or a successful one. At the end of the day,
            trading the equity market is a probabilistic game and only a
            market-outperforming algorithm is worth trading.
          </Col>
        </Row>
        <Row className="marginRow30">
          <Col md={12}>
            <div className="footerlist">
              <ul>
                <li>
                  <Link to="/">Contact Us</Link>
                </li>
                <li>
                  <Link to="/">Terms of Service</Link>
                </li>
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
              </ul>
              <div style={{ maxWidth: "150px" }}>
                <h5>Our Address:</h5>
                <p>
                  24044 Cinco Village Center Blvd, Suite 100, Katy, Texas, 77494
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="marginRow30">
          <Col md={6}>
            <div className="copyright">
              <p>
                <span>2021</span> MyStock.ai. All Rights Reserved. Copyright ©
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="socialmedia">
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
