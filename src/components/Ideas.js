import React, { useState } from 'react';
import { Tabs, Tab, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Input } from 'reactstrap';
import SectorsCard from './Homepage/TabSection/SectorsCard';
const tableHeader = [
  'Sub-Sector Title',
  '1-Day Change',
  '1-Week Change',
  '1-Month Change',
  '1-Quater Change',
  '6-Month Change',
  '1-Year Change',
  'YTD Change',
];
const Tr = () => {
  return (
    <tr>
      <td>
        <Link to={{ pathname: `https://google.com` }} target='_blank'>
          Internet Retail
        </Link>
      </td>
      <td>0.22</td>
      <td>0.94</td>
      <td>0.4</td>
      <td>.2</td>
      <td>0.4</td>
      <td>.3</td>
      <td>.23</td>
    </tr>
  );
};

const Ideas = () => {
  const [index, setIndex] = useState(1);
  return (
    <Container style={{ marginTop: '160px' }} className='toppicks'>
      <Tabs defaultActiveKey='Trading Ideas' id='Trading Ideas'>
        {/* tab1 */}

        <Tab eventKey='Trading Ideas' title='Trading Ideas'>
          <Col lg={12} className='py-3 px-3 trading_ideas'>
            <h4>Trading Ideas</h4>
            <p>
              Newest Trading Ideas gaining momentum in the stock market. This
              list is updated periodically to reflect the market sentiment.
            </p>
            <ol className='px-3 '>
              <li>
                Each Trading idea has a list of stocks associated with the idea.
              </li>
              <li>
                Each Trading idea has a list of stocks associated with the idea.
              </li>
              <li>
                Each Trading idea has a list of stocks associated with the idea.
              </li>
              <li>
                Each Trading idea has a list of stocks associated with the idea.
              </li>
            </ol>

            <Col lg={12} className='pt-4 mb-5'>
              <Row>
                <SectorsCard
                  title={'Card Title'}
                  text="Some quick example text to build on the card title and make up
                  the bulk of the card's content."
                  linkpath='/'
                  buttonText='Go somewhere'
                />
                <SectorsCard
                  title={'Card Title'}
                  text="Some quick example text to build on the card title and make up
                  the bulk of the card's content."
                  linkpath='/'
                  buttonText='Go somewhere'
                />
                <SectorsCard
                  title={'Card Title'}
                  text="Some quick example text to build on the card title and make up
                  the bulk of the card's content."
                  linkpath='/'
                  buttonText='Go somewhere'
                />
                <SectorsCard
                  title={'Card Title'}
                  text="Some quick example text to build on the card title and make up
                  the bulk of the card's content."
                  linkpath='/'
                  buttonText='Go somewhere'
                />
                <SectorsCard
                  title={'Card Title'}
                  text="Some quick example text to build on the card title and make up
                  the bulk of the card's content."
                  linkpath='/'
                  buttonText='Go somewhere'
                />
                <SectorsCard
                  title={'Card Title'}
                  text="Some quick example text to build on the card title and make up
                  the bulk of the card's content."
                  linkpath='/'
                  buttonText='Go somewhere'
                />
              </Row>
            </Col>
          </Col>
        </Tab>
        {/* tab2 */}
        <Tab eventKey='Grouped by Industry' title='Grouped by Industry'>
          <Col lg={12} className='trading_ideas py-3 px-3'>
            <Col className='offset-md-8'>
              <Input placeholder='Search' />
            </Col>
          </Col>
          <Table striped bordered responsive>
            <thead>
              <tr>
                {tableHeader.map((name) => (
                  <th>{name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <Tr />
              <Tr />
              <Tr />
              <Tr />
              <Tr />
              <Tr />
              <Tr />
              <Tr />
              <Tr />
              <Tr />
              <Tr />
              <Tr />
              <Tr />
              <Tr />
              <Tr />
              <Tr />
              <Tr />
              <Tr />
              <Tr />
              <Tr />
              <Tr />
              <Tr />
              <Tr />
              <Tr />
              <Tr />
              <Tr />
              <Tr />
              <Tr />
              <Tr />
              <Tr />
              <Tr />
              <Tr />
            </tbody>
          </Table>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Ideas;
