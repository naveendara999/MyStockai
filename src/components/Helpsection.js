import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import hero from "./../Assets/images/listeposter.png";
import ai from "./../Assets/images/aiimage.jpeg";
import how from "./../Assets/images/howitworks.png";
import xlf from "./../Assets/images/xlf.jpeg";
import Play from "./../Assets/images/playicon.png";

import ReactPlayer from "react-player";

function Helpsection() {
  const [play, setplay] = useState(false);
  return (
    <div className="my-5">
      <Container>
        <Row>
          <Col
            md={6}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
            className=" mt-5 mt-md-0 order-md-0 px-md-3 px-0"
          >
            <div style={{ textAlign: "right", height: "100%" }}>
              <img
                alt=""
                src={xlf}
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
              />
            </div>
          </Col>
          <Col
            md={6}
            style={{
              alignItems: "center",
              textAlign: "left",
            }}
          >
            <div style={{ textAlign: "left" }}>
              <h2
                className="wow fadeInLeft mb-3"
                style={{ fontWeight: "700", color: " #181f2a" }}
              >
                How do we help you?
              </h2>
            </div>

            <div style={{ margin: "0", padding: "0", boxSizing: "border-box" }}>
              <li className="li" data-aos="fade-right">
                <FontAwesomeIcon
                  icon={faCheckSquare}
                  size="1x"
                  className="i"
                  data-aos="fade-down"
                />
                To show you trend of any specific stock
                {/* <span>Top stocks in uptrend each day that you can buy</span> */}
              </li>
              <li className="li" data-aos="fade-right">
                <FontAwesomeIcon
                  icon={faCheckSquare}
                  size="1x"
                  className="i"
                  data-aos="fade-down"
                />
                Next 5 Days forecasted amount for each stock
                {/* <span>Top stocks in uptrend each day that you can buy</span> */}
              </li>
              <li className="li" data-aos="fade-right">
                <FontAwesomeIcon
                  icon={faCheckSquare}
                  size="1x"
                  className="i"
                  data-aos="fade-down"
                />
                KPI which will show you whether you should buy or sell stock
                according to forecasted amount
                {/* <span>Top stocks in uptrend each day that you can buy</span> */}
              </li>
            </div>
          </Col>
        </Row>
        <Row className="my-5">
          <Col
            md={6}
            style={{
              alignItems: "center",
              textAlign: "left",
            }}
          >
            <div style={{ textAlign: "left" }}>
              <h2
                data-aos="fade-left"
                className="t mb-3"
                style={{ fontWeight: "700", color: " #181f2a" }}
              >
                Who We are?
              </h2>
            </div>

            <div style={{ margin: "0", padding: "0", boxSizing: "border-box" }}>
              <li className="li" data-aos="fade-right">
                <FontAwesomeIcon
                  icon={faCheckSquare}
                  size="1x"
                  className="i"
                  data-aos="fade-down"
                />
                We are AI enthusiast who have worked on many projects and on
                problems to solve it by Deep Learning and Artificial language.
                {/* <span>Top stocks in uptrend each day that you can buy</span> */}
              </li>
              <li className="li" data-aos="fade-right">
                <FontAwesomeIcon
                  icon={faCheckSquare}
                  size="1x"
                  className="i"
                  data-aos="fade-down"
                />
                We have worked on every cloud platform and committed to best
                solution to our clients.
                {/* <span>Top stocks in uptrend each day that you can buy</span> */}
              </li>
              {/* <li className="li" data-aos="fade-right">
                <FontAwesomeIcon
                  icon={faCheckSquare}
                  size="1x"
                  className="i"
                  data-aos="fade-down"
                />
                View daily uptrend stocks
                <span>Top stocks in uptrend each day that you can buy</span>
              </li>
              <li className="li" data-aos="fade-right">
                <FontAwesomeIcon
                  icon={faCheckSquare}
                  size="1x"
                  className="i"
                  data-aos="fade-down"
                />
                View daily uptrend stocks
                <span>Top stocks in uptrend each day that you can buy</span>
              </li> */}
            </div>
          </Col>
          <Col
            md={6}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
            className=" mt-5 mt-md-0 order-md-0 px-md-3 px-0"
          >
            <div style={{ textAlign: "right", height: "100%" }}>
              <img
                data-aos="fade-down"
                alt=""
                src={ai}
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
              />
            </div>
          </Col>
        </Row>
        {/* // */}
        <Row>
          <Col
            md={6}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
            className=" mt-5 mt-md-0 order-md-0 px-md-3 px-0"
          >
            <div style={{ textAlign: "right", height: "100%" }}>
              <img
                data-aos="fade-down"
                alt=""
                src={how}
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
              />
            </div>
          </Col>
          <Col
            md={6}
            style={{
              alignItems: "center",
              textAlign: "left",
            }}
          >
            <div style={{ textAlign: "left" }}>
              <h2
                className="wow fadeInLeft mb-3"
                style={{ fontWeight: "700", color: " #181f2a" }}
              >
                How does My Stock AI work?
              </h2>
            </div>

            <div style={{ margin: "0", padding: "0", boxSizing: "border-box" }}>
              <li className="li" data-aos="fade-right">
                <FontAwesomeIcon
                  icon={faCheckSquare}
                  size="1x"
                  className="i"
                  data-aos="fade-down"
                />
                My stock AI is artificial model which trained on past data and
                according to trend, it shows forecasted amount for each stock
                for upcoming 5 Days.
                {/* <span>Top stocks in uptrend each day that you can buy</span> */}
              </li>
              <li className="li" data-aos="fade-right">
                <FontAwesomeIcon
                  icon={faCheckSquare}
                  size="1x"
                  className="i"
                  data-aos="fade-down"
                />
                We have data of share price for last 10 years.
                {/* <span>Top stocks in uptrend each day that you can buy</span> */}
              </li>
              {/* <li className="li" data-aos="fade-right">
                <FontAwesomeIcon
                  icon={faCheckSquare}
                  size="1x"
                  className="i"
                  data-aos="fade-down"
                />
                View daily uptrend stocks
                <span>Top stocks in uptrend each day that you can buy</span>
              </li>
              <li className="li" data-aos="fade-right">
                <FontAwesomeIcon
                  icon={faCheckSquare}
                  size="1x"
                  className="i"
                  data-aos="fade-down"
                />
                View daily uptrend stocks
                <span>Top stocks in uptrend each day that you can buy</span>
              </li>
              <li className="li" data-aos="fade-right">
                <FontAwesomeIcon
                  icon={faCheckSquare}
                  size="1x"
                  className="i"
                  data-aos="fade-down"
                />
                View daily uptrend stocks
                <span>Top stocks in uptrend each day that you can buy</span>
              </li>
              <li className="li" data-aos="fade-right">
                <FontAwesomeIcon
                  icon={faCheckSquare}
                  size="1x"
                  className="i"
                  data-aos="fade-down"
                />
                View daily uptrend stocks
                <span>Top stocks in uptrend each day that you can buy</span>
              </li> */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Helpsection;
