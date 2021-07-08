import React, { useState } from 'react';
import {
  Button,
  ButtonGroup,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
} from 'reactstrap';

import { Container, Tabs, Tab } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import alc from '../Assets/images/alkermes.svg';
import GaugeChart from 'react-gauge-chart';
import Piegraph from './Graphs/Piegraph';
import BottomChart from './Graphs/BottomChart';

export const StockDetails = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const { stock = 'jg' } = useParams();
  console.log(stock);
  return (
    <Container className='stockdetails'>
      <Col className='stock_header'>
        <Col sm={4} className='stock_about'>
          <Link to={{ pathname: '/' }}>
            <div className='stock_logo'>
              <img src={alc} alt='' />
              <div>
                <h1>Alkermes plc</h1>
                <div className='second_line'>
                  <span>ALKS</span>
                  <span>
                    <img src={alc} alt='' /> NASDQ
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </Col>
      </Col>

      <Row>
        <Col lg={3} style={{ height: '60px' }}>
          <div></div>
        </Col>
        <Col></Col>
        <Col lg={3} style={{ height: '60px' }}></Col>
      </Row>

      <ButtonGroup className='my-3'>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret>Buy with your trading platform</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Schwab</DropdownItem>
            <DropdownItem>E-Trade</DropdownItem>
            <DropdownItem>Trade Station</DropdownItem>
            <DropdownItem>Interactive Brokers</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Button caret>Add to Favorite List & track everyday</Button>
        <Button>Add Notes</Button>
      </ButtonGroup>

      <Tabs
        defaultActiveKey='Analysis
'
        id='Analysis
'
      >
        <Tab
          eventKey='Analysis
'
          title='Analysis
'
        >
          <Row>
            <Col lg={6} className='mt-4 mb-4'>
              <div
                style={{
                  backgroundColor: '#fff',
                  height: '600px',
                }}
                className='shadow-lg'
              >
                <div className='detail_card p-4'>
                  <div className='title'>
                    <h4 className='mb-4'>Investing style</h4>
                    <p className='mb-2 desc'>
                      Want to know if this stock suit your investment style ?
                      You are 1-step away from it.
                    </p>
                    <p className='mb-2 desc'>
                      Click the below button to upload your old transactions
                      from any brokerages.
                    </p>
                  </div>

                  <Link to='/transaction'>
                    <Button color='warning' block className='my-5'>
                      Upload Transactions
                    </Button>
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={6} className='mt-4 mb-4 '>
              <div
                style={{
                  backgroundColor: '#fff',
                  height: '600px',
                }}
                className='shadow-lg'
              >
                <div className='detail_card p-4'>
                  <div className='title'>
                    <h4 className='mb-4'>Analyst Analysis</h4>
                    <Piegraph />
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6} className='my-2'>
              <div
                style={{
                  backgroundColor: '#fff',
                  height: '600px',
                }}
                className='shadow-lg'
              >
                <div className='detail_card p-4'>
                  <div className='title'>
                    <h4>Social Sentiment</h4>
                    <div
                      className='my-4'
                      style={{
                        display: 'grid',
                        placeItems: 'center',
                        height: '400px',
                        // width: '100%',
                      }}
                    >
                      <GaugeChart
                        style={{ width: '50%' }}
                        nrOfLevels={2}
                        colors={['rgb(251, 84, 122)', 'rgb(95, 22, 215)']}
                        percent={0.95}
                        textColor={'black'}
                        animate={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6} className='my-2 '>
              <div
                style={{
                  backgroundColor: '#fff',
                  height: '600px',
                }}
                className='shadow-lg'
              >
                <div className='detail_card p-4'>
                  <div style={{ textAlign: 'center' }}>
                    <div className='title '>
                      <h4>
                        Technical Analysis for{' '}
                        <Link to='#' style={{ textDecoration: 'none' }}>
                          ALKS
                        </Link>
                      </h4>
                    </div>
                    <div
                      className='my-4'
                      style={{
                        display: 'grid',
                        placeItems: 'center',
                        height: '400px',
                        // width: '100%',
                      }}
                    >
                      <GaugeChart
                        style={{ width: '50%' }}
                        nrOfLevels={5}
                        colors={['rgb(251, 84, 122)', 'rgb(95, 22, 215)']}
                        percent={0.67}
                        textColor={'black'}
                        animate={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col className='my-4' lg={12}>
              <div
                style={{
                  backgroundColor: '#fff',
                  height: '600px',
                }}
                className='shadow-lg'
              >
                <BottomChart />
              </div>
            </Col>
          </Row>
        </Tab>
        <Tab
          eventKey='Stock Features
'
          title='Stock Features
'
          disabled
        ></Tab>
      </Tabs>
    </Container>
  );
};
