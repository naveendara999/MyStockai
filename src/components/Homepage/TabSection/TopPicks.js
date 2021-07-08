import React, { useState } from 'react';
import { Tabs, Tab, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Form, FormGroup, Input } from 'reactstrap';
import SectorsCard from './SectorsCard';

function TopPicks() {
  const tableHeader = [
    'Company',
    'Trend',
    'Price',
    'Volume',
    'Dividend',
    'P/E',
    'Market Cap',
    'Industry',
    'Action',
  ];

  const [FavoritesList, setFavoritesList] = useState([]);
  console.log(setFavoritesList);
  return (
    <Container style={{ marginTop: '160px' }} className='toppicks'>
      <Tabs defaultActiveKey='Top picks in uptrend' id='StocklistTab'>
        {/* tab1 */}

        <Tab eventKey='Top picks in uptrend' title='Top picks in uptrend'>
          <div className='tab_slogen py-3'>
            <ul>
              <li>
                List of all your favorites stocks, Click on the symbol to get
                more detailed analysis about the stock.
              </li>
            </ul>
          </div>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                {tableHeader.map((name) => (
                  <th>{name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Add to Favorites</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Add to Favorites</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </Table>
        </Tab>

        {/* tab2 */}

        <Tab eventKey='Favorites' title='Favorite'>
          {FavoritesList && FavoritesList.length > 0 ? (
            <>
              <div className='tab_slogen py-3'>
                <ul>
                  <li>
                    Top stocks for the day. Click on the symbol to get more
                    detailed analysis about the stock.
                  </li>
                </ul>
              </div>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    {tableHeader.map((name) => (
                      <th>{name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </Table>
            </>
          ) : (
            <Col lg={12} className='favorites py-5'>
              <p> Look's like you have nothing in your favorites.</p>
            </Col>
          )}
        </Tab>

        {/* tab3*/}

        <Tab eventKey='My Portfolio' title='My Portfolio'>
          <Col lg={12} className='pt-4 px-3 portfolio'>
            <h3>My Portfolio</h3>

            <p className='mb-3'>
              Add new open positions so we can track and alert you when the it
              hits the <strong>stop-loss or the trend changes .</strong>
            </p>

            <Form className='needs-validation p-3 bg-light mt-1 '>
              <Row>
                <Col md={3} sm={6}>
                  <FormGroup>
                    <Input
                      type='email'
                      name='email'
                      id='exampleEmail'
                      placeholder='with a placeholder'
                    />
                  </FormGroup>
                </Col>

                <Col md={3} sm={6}>
                  <FormGroup>
                    <Input
                      type='email'
                      name='email'
                      id='exampleEmail'
                      placeholder='with a placeholder'
                    />
                  </FormGroup>
                </Col>
                <Col md={3} sm={6}>
                  <FormGroup>
                    <Input
                      type='email'
                      name='email'
                      id='exampleEmail'
                      placeholder='with a placeholder'
                    />
                  </FormGroup>
                </Col>
                <Col md={3} sm={6}>
                  <Button style={{ width: '100%' }}>Submit</Button>
                </Col>
              </Row>
            </Form>

            <Tabs defaultActiveKey='Open Positions' id='PortfolioTabs'>
              <Tab eventKey='Open Positions' title='Open Positions'>
                <Col lg={12} className='py-5 open_positions'>
                  <p>
                    Look's like you have none. Add them above so we can alert
                    you when its time to sell.
                  </p>
                </Col>
              </Tab>
              <Tab eventKey=' Closed Positions' title=' Closed Positions'>
                <Col lg={12} className='py-5 open_positions'>
                  <p>Look's like you have none so far.</p>
                </Col>
              </Tab>
            </Tabs>
          </Col>
        </Tab>

        {/* tab4*/}

        <Tab
          eventKey='Best picks-based on your style'
          title='Best picks-based on your style'
        >
          <Col lg={12} className='py-5 open_positions'>
            <p>
              <Link to='/toplist'> Upload transactions</Link> {''}so we can
              compute this value. You are 1-step away from it.
            </p>
          </Col>
        </Tab>
      </Tabs>

      {/* //cards */}

      <Col lg={12} className='pt-4 mb-5'>
        <h2>Uptrend by Sectors</h2>
        <p className='mb-3'>
          All the sectors in the market and number of stocks uptrending in each
          sector. Click on 'Get List' to see all the stocks.
        </p>
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
    </Container>
  );
}

export default TopPicks;
