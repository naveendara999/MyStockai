import React from 'react';
import { Container, Col, Row } from 'reactstrap';

const Transaction = () => {
  return (
    <Container style={{ marginTop: '160px' }} className='transaction'>
      <Col lg={12}>
        <Row>
          <Col md={8} className='left py-1'>
            <h2>See all your trades in one place</h2>
            <p className='mb-4'>
              Upload your old trades from all your accounts and brokerages.
              Select a brokerage and you will see a detailed instructions on how
              to get your historical transactions from your brokerage.
            </p>
            <div className='platform'>
              <p>Select your online Brokerage </p>
            </div>
          </Col>
          <Col md={4} className='right py-1'>
            <p>Three easy steps to get started with Liste.AI</p>
            <ol>
              <li>Download old transactions from your brokerage</li>
              <li>Download old transactions from your brokerage</li>
              <li>Download old transactions from your brokerage</li>
            </ol>
            <hr />
            <p> Serious about your transaction data. We only read </p>
            <ul>
              <li>Symbol / Ticker</li>
              <li>Symbol / Ticker</li>
              <li>Symbol / Ticker</li>
            </ul>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};
export default Transaction;
