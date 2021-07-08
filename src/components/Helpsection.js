import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import hero from './../Assets/images/listeposter.png';
import ai from './../Assets/images/aiimage.jpeg';
import how from './../Assets/images/howitworks.png';
import Play from './../Assets/images/playicon.png';

import ReactPlayer from 'react-player';

function Helpsection() {
  const [play, setplay] = useState(false);
  return (
    <div className='my-5'>
      <Container>
        <Row>
          <Col
            md={6}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
            className=' mt-5 mt-md-0 order-md-0 px-md-3 px-0'
          >
            <div style={{ textAlign: 'right', height: '100%' }}>
              {play && (
                <div
                  style={{
                    position: 'relative',
                    maxWidth: '1920px',
                    maxHeight: '1080px',
                    width: '100%',
                    height: '100%',
                    zIndex: '10000',
                    // backgroundColor: 'rgb(0,0,0,.7)',
                    // paddingTop: '56.25%',
                  }}
                  onClick={() => setplay(!play)}
                >
                  <ReactPlayer
                    style={{
                      position: 'fixed',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%,-50%)',
                      maxWidth: '1280px',
                      maxHeight: '720px',
                    }}
                    width='100%'
                    height='100%'
                    url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                    playing={play}
                  />
                </div>
              )}

              <img
                alt=''
                src={hero}
                style={{ objectFit: 'cover', height: '100%', width: '100%' }}
              />
              <img
                onClick={() => setplay(!play)}
                className='playicon  img-fluid '
                alt=''
                src={Play}
              />
            </div>
          </Col>
          <Col
            md={6}
            style={{
              alignItems: 'center',
              textAlign: 'left',
            }}
          >
            <div style={{ textAlign: 'left' }}>
              <h2
                className='wow fadeInLeft mb-3'
                style={{ fontWeight: '700', color: ' #181f2a' }}
              >
                How do we help you?
              </h2>
            </div>

            <div style={{ margin: '0', padding: '0', boxSizing: 'border-box' }}>
              <li className='li' data-aos='fade-right'>
                <FontAwesomeIcon
                  icon={faCheckSquare}
                  size='1x'
                  className='i'
                  data-aos='fade-down'
                />
                View daily uptrend stocks
                <span>Top stocks in uptrend each day that you can buy</span>
              </li>
              <li className='li' data-aos='fade-right'>
                <FontAwesomeIcon
                  icon={faCheckSquare}
                  size='1x'
                  className='i'
                  data-aos='fade-down'
                />
                View daily uptrend stocks
                <span>Top stocks in uptrend each day that you can buy</span>
              </li>
              <li className='li' data-aos='fade-right'>
                <FontAwesomeIcon
                  icon={faCheckSquare}
                  size='1x'
                  className='i'
                  data-aos='fade-down'
                />
                View daily uptrend stocks
                <span>Top stocks in uptrend each day that you can buy</span>
              </li>
              <li className='li' data-aos='fade-right'>
                <FontAwesomeIcon
                  icon={faCheckSquare}
                  size='1x'
                  className='i'
                  data-aos='fade-down'
                />
                View daily uptrend stocks
                <span>Top stocks in uptrend each day that you can buy</span>
              </li>
              <li className='li' data-aos='fade-right'>
                <FontAwesomeIcon
                  icon={faCheckSquare}
                  size='1x'
                  className='i'
                  data-aos='fade-down'
                />
                View daily uptrend stocks
                <span>Top stocks in uptrend each day that you can buy</span>
              </li>
              <li className='li' data-aos='fade-right'>
                <FontAwesomeIcon
                  icon={faCheckSquare}
                  size='1x'
                  className='i'
                  data-aos='fade-down'
                />
                View daily uptrend stocks
                <span>Top stocks in uptrend each day that you can buy</span>
              </li>
            </div>
          </Col>
        </Row>
        {/* // */}
        <Row className='my-5'>
          <Col
            md={6}
            style={{
              alignItems: 'center',
              textAlign: 'left',
            }}
          >
            <div style={{ textAlign: 'left' }}>
              <h2
                data-aos='fade-left'
                className='t mb-3'
                style={{ fontWeight: '700', color: ' #181f2a' }}
              >
                Everyone has their own style of INVESTING.
              </h2>
            </div>

            <div style={{ margin: '0', padding: '0', boxSizing: 'border-box' }}>
              <li className='li' data-aos='fade-right'>
                <FontAwesomeIcon
                  icon={faCheckSquare}
                  size='1x'
                  className='i'
                  data-aos='fade-down'
                />
                View daily uptrend stocks
                <span>Top stocks in uptrend each day that you can buy</span>
              </li>
              <li className='li' data-aos='fade-right'>
                <FontAwesomeIcon
                  icon={faCheckSquare}
                  size='1x'
                  className='i'
                  data-aos='fade-down'
                />
                View daily uptrend stocks
                <span>Top stocks in uptrend each day that you can buy</span>
              </li>
              <li className='li' data-aos='fade-right'>
                <FontAwesomeIcon
                  icon={faCheckSquare}
                  size='1x'
                  className='i'
                  data-aos='fade-down'
                />
                View daily uptrend stocks
                <span>Top stocks in uptrend each day that you can buy</span>
              </li>
              <li className='li' data-aos='fade-right'>
                <FontAwesomeIcon
                  icon={faCheckSquare}
                  size='1x'
                  className='i'
                  data-aos='fade-down'
                />
                View daily uptrend stocks
                <span>Top stocks in uptrend each day that you can buy</span>
              </li>
              <li className='li' data-aos='fade-right'>
                <FontAwesomeIcon
                  icon={faCheckSquare}
                  size='1x'
                  className='i'
                  data-aos='fade-down'
                />
                View daily uptrend stocks
                <span>Top stocks in uptrend each day that you can buy</span>
              </li>
              <li className='li' data-aos='fade-right'>
                <FontAwesomeIcon
                  icon={faCheckSquare}
                  size='1x'
                  className='i'
                  data-aos='fade-down'
                />
                View daily uptrend stocks
                <span>Top stocks in uptrend each day that you can buy</span>
              </li>
            </div>
          </Col>
          <Col
            md={6}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
            className=' mt-5 mt-md-0 order-md-0 px-md-3 px-0'
          >
            <div style={{ textAlign: 'right', height: '100%' }}>
              <img
                data-aos='fade-down'
                alt=''
                src={ai}
                style={{ objectFit: 'cover', height: '100%', width: '100%' }}
              />
            </div>
          </Col>
        </Row>
        {/* // */}
        <Row>
          <Col
            md={6}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
            className=' mt-5 mt-md-0 order-md-0 px-md-3 px-0'
          >
            <div style={{ textAlign: 'right', height: '100%' }}>
              <img
                data-aos='fade-down'
                alt=''
                src={how}
                style={{ objectFit: 'cover', height: '100%', width: '100%' }}
              />
            </div>
          </Col>
          <Col
            md={6}
            style={{
              alignItems: 'center',
              textAlign: 'left',
            }}
          >
            <div style={{ textAlign: 'left' }}>
              <h2
                className='wow fadeInLeft mb-3'
                style={{ fontWeight: '700', color: ' #181f2a' }}
              >
                How does liste.ai works ?
              </h2>
            </div>

            <div style={{ margin: '0', padding: '0', boxSizing: 'border-box' }}>
              <li className='li' data-aos='fade-right'>
                <FontAwesomeIcon
                  icon={faCheckSquare}
                  size='1x'
                  className='i'
                  data-aos='fade-down'
                />
                View daily uptrend stocks
                <span>Top stocks in uptrend each day that you can buy</span>
              </li>
              <li className='li' data-aos='fade-right'>
                <FontAwesomeIcon
                  icon={faCheckSquare}
                  size='1x'
                  className='i'
                  data-aos='fade-down'
                />
                View daily uptrend stocks
                <span>Top stocks in uptrend each day that you can buy</span>
              </li>
              <li className='li' data-aos='fade-right'>
                <FontAwesomeIcon
                  icon={faCheckSquare}
                  size='1x'
                  className='i'
                  data-aos='fade-down'
                />
                View daily uptrend stocks
                <span>Top stocks in uptrend each day that you can buy</span>
              </li>
              <li className='li' data-aos='fade-right'>
                <FontAwesomeIcon
                  icon={faCheckSquare}
                  size='1x'
                  className='i'
                  data-aos='fade-down'
                />
                View daily uptrend stocks
                <span>Top stocks in uptrend each day that you can buy</span>
              </li>
              <li className='li' data-aos='fade-right'>
                <FontAwesomeIcon
                  icon={faCheckSquare}
                  size='1x'
                  className='i'
                  data-aos='fade-down'
                />
                View daily uptrend stocks
                <span>Top stocks in uptrend each day that you can buy</span>
              </li>
              <li className='li' data-aos='fade-right'>
                <FontAwesomeIcon
                  icon={faCheckSquare}
                  size='1x'
                  className='i'
                  data-aos='fade-down'
                />
                View daily uptrend stocks
                <span>Top stocks in uptrend each day that you can buy</span>
              </li>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Helpsection;
