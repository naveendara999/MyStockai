import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  Table,
  UncontrolledAlert,
} from "reactstrap";
import * as favStockActions from "../redux/actions/favStockActions";
import { Container, Tabs, Tab, Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import alc from "../Assets/images/alkermes.svg";
import GaugeChart from "react-gauge-chart";
import Piegraph from "./Graphs/Piegraph";
import BottomChart from "./Graphs/BottomChart";
import PriBottomChart from "./Graphs/PriBottomGraph";
import { useDispatch, useSelector } from "react-redux";
import AlertComponent from "./alert";
import * as StockHisFutActions from "../redux/actions/stockHisFutureActions";
import RechartData from "./reChart/index";

export const StockDetails = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { stock } = useParams();
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);

  const UserEmail = localStorage.getItem("UserEmail");
  const state = useSelector((state) => state);
  const putdata = useSelector((state) => state.favStockData.putFavData);
  const hisData = useSelector((state) => state.stockHisFutureData.stockHisData);
  // const futureData = useSelector(
  //   (state) => state.stockHisFutureData.stockFutureData
  // );

  const dispatch = useDispatch();
  const addFavHandler = () => {
    dispatch(favStockActions.addFavStockListAction(UserEmail, stock));
  };

  React.useEffect(() => {
    dispatch(StockHisFutActions.getStockHistoricalAction(stock));
    // dispatch(StockHisFutActions.getStockFutureAction(stock));
  }, [stock]);

  return (
    <Container className="stockdetails">
      <Col className="stock_header">
        <Col sm={4} className="stock_about">
          <Link>
            <div className="stock_logo">
              <img src={alc} alt="" />
              <div>
                <h1>{stock}</h1>
                <div className="second_line">
                  <span>{stock}</span>
                  <span>
                    <img src={alc} alt="" /> NASDQ
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </Col>
      </Col>
      {/* 
      <Row>
        <Col lg={3} style={{ height: "60px" }}>
          <div></div>
        </Col>
        <Col></Col>
        <Col lg={3} style={{ height: "60px" }}></Col>
      </Row> */}

      <ButtonGroup className="my-3">
        {/* <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret>Buy with your trading platform</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Schwab</DropdownItem>
            <DropdownItem>E-Trade</DropdownItem>
            <DropdownItem>Trade Station</DropdownItem>
            <DropdownItem>Interactive Brokers</DropdownItem>
          </DropdownMenu>
        </Dropdown> */}
        <Button onClick={() => addFavHandler()} caret>
          {putdata.isLoading ? "Loading..." : "Add to Favorite List"}
        </Button>
        {/* <Button>Add Notes</Button> */}
      </ButtonGroup>
      {putdata.isSuccess && putdata.Message === "Stock added to favourites" ? (
        <UncontrolledAlert color="success">{putdata.Message}</UncontrolledAlert>
      ) : (
        ""
      )}

      <Tabs
        defaultActiveKey="Analysis
"
        id="Analysis
"
      >
        <Tab
          eventKey="Analysis
"
          title="Analysis
"
        >
          <Row>
            <Col lg={6} className="mt-4 mb-4">
              <div
                style={{
                  backgroundColor: "#fff",
                }}
                className="shadow-lg"
              >
                <div className="detail_card p-4">
                  <Table striped bordered responsive>
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Prediction </th>
                      </tr>
                    </thead>

                    {hisData.isSuccess && (
                      <tbody>
                        {hisData.data
                          .reverse()
                          .slice(0, 5)
                          .map((item) => {
                            return (
                              <tr>
                                <td>{item.date}</td>
                                <td>{item.predicted_price}</td>
                              </tr>
                            );
                          })}
                      </tbody>
                    )}
                  </Table>
                  {hisData.isLoading && (
                    <div class="d-flex justify-content-center py-5">
                      <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Col>
            <Col lg={6} className="mt-4 mb-4">
              <div
                style={{
                  backgroundColor: "#fff",
                }}
                className="shadow-lg"
              >
                <div className="detail_card p-4">
                  <div style={{ textAlign: "center" }}>
                    <div className="title ">
                      <h4>
                        Technical Analysis for{" "}
                        <Link to="#" style={{ textDecoration: "none" }}>
                          {stock}
                        </Link>
                      </h4>
                    </div>
                    <div
                      className="my-4"
                      style={{
                        margin: " auto",
                        display: "grid",
                        placeItems: "center",
                      }}
                    >
                      <GaugeChart
                        style={{ width: "50%" }}
                        nrOfLevels={3}
                        colors={[
                          "rgb(242, 40, 36)",
                          "rgb(233, 245, 15)",
                          "rgb(106, 242, 15)",
                        ]}
                        percent={Math.random()}
                        textColor={"black"}
                        animate={false}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "2rem",
                        justifyContent: "center",
                      }}
                    >
                      <span>
                        <div>
                          <h5>Sell</h5>
                        </div>
                      </span>
                      <span>
                        <div>
                          <h5>Neutral</h5>
                        </div>
                      </span>
                      <span>
                        <div>
                          <h5>Buy</h5>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            {/* <Col lg={6} className="mt-4 mb-4 ">
              <div
                style={{
                  backgroundColor: "#fff",
                  height: "550px",
                }}
                className="shadow-lg"
              >
                <div className="detail_card p-4">
                  <div className="title" style={{ margin: "auto" }}>
                    <h4 className="mb-4">Analyst Analysis</h4>
                    <Piegraph />
                  </div>
                </div>
                <Row className="mb-5">
                  <Col lg={6}>
                    <div
                      className="p-2"
                      style={{
                        display: "flex",
                        backgroundColor: "#f8f9fa",
                        justifyContent: "space-between",
                      }}
                    >
                      <span style={{ fontSize: "16px", fontWeight: "400px" }}>
                        Buy
                      </span>
                      <span
                        className="badge badge-primary badge-pill"
                        style={{
                          fontSize: "12px",
                          backgroundColor: "#0073dd",
                        }}
                      >
                        7
                      </span>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div
                      className="p-2"
                      style={{
                        display: "flex",
                        backgroundColor: "#f8f9fa",
                        justifyContent: "space-between",
                      }}
                    >
                      <span style={{ fontSize: "16px", fontWeight: "400px" }}>
                        Overweight
                      </span>
                      <span
                        className="badge badge-primary badge-pill"
                        style={{
                          fontSize: "12px",

                          backgroundColor: "#0073dd",
                        }}
                      >
                        10
                      </span>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div
                      className="p-2"
                      style={{
                        display: "flex",
                        backgroundColor: "#f8f9fa",
                        justifyContent: "space-between",
                      }}
                    >
                      <span style={{ fontSize: "16px", fontWeight: "400px" }}>
                        Hold
                      </span>
                      <span
                        className="badge badge-primary badge-pill"
                        style={{
                          fontSize: "12px",

                          backgroundColor: "#0073dd",
                        }}
                      >
                        8
                      </span>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div
                      className="p-2"
                      style={{
                        display: "flex",
                        backgroundColor: "#f8f9fa",
                        justifyContent: "space-between",
                      }}
                    >
                      <span style={{ fontSize: "16px", fontWeight: "400px" }}>
                        Underweight
                      </span>
                      <span
                        className="badge badge-primary badge-pill"
                        style={{
                          fontSize: "12px",

                          backgroundColor: "#0073dd",
                        }}
                      >
                        0
                      </span>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div
                      className="p-2"
                      style={{
                        display: "flex",
                        backgroundColor: "#f8f9fa",
                        justifyContent: "space-between",
                      }}
                    >
                      <span style={{ fontSize: "16px", fontWeight: "400px" }}>
                        sell
                      </span>
                      <span
                        className="badge badge-primary badge-pill"
                        style={{
                          fontSize: "12px",

                          backgroundColor: "#0073dd",
                        }}
                      >
                        0
                      </span>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col> */}
            {/* <Col lg={6} className="my-2">
              <div
                style={{
                  backgroundColor: "#fff",
                  margin: "auto",
                  height: "500px",
                }}
                className="shadow-lg"
              >
                <div className="detail_card p-4">
                  <div className="title">
                    <h4>Social Sentiment</h4>
                    <div
                      className="my-4"
                      style={{
                        display: "grid",
                        placeItems: "center",
                        margin: " auto",
                      }}
                    >
                      <GaugeChart
                        style={{ width: "50%", height: "200px" }}
                        nrOfLevels={2}
                        colors={["rgb(251, 84, 122)", "rgb(95, 22, 215)"]}
                        percent={0.95}
                        textColor={"black"}
                        animate={false}
                      />
                    </div>
                  </div>
                  <Row className="my-4">
                    <Col lg={12} className="mb-2">
                      <div
                        className="p-2"
                        style={{
                          display: "flex",
                          backgroundColor: "#f8f9fa",
                          justifyContent: "space-between",
                        }}
                      >
                        <span style={{ fontSize: "16px", fontWeight: "400px" }}>
                          Positive
                        </span>
                        <span
                          className="badge badge-primary badge-pill"
                          style={{
                            fontSize: "12px",

                            backgroundColor: "#0073dd",
                          }}
                        >
                          100 %
                        </span>
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div
                        className="p-2"
                        style={{
                          display: "flex",
                          backgroundColor: "#f8f9fa",
                          justifyContent: "space-between",
                        }}
                      >
                        <span style={{ fontSize: "16px", fontWeight: "400px" }}>
                          Negative
                        </span>
                        <span
                          className="badge badge-primary badge-pill"
                          style={{
                            fontSize: "12px",

                            backgroundColor: "#0073dd",
                          }}
                        >
                          0%
                        </span>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col lg={6} className="my-2 ">
              <div
                style={{
                  backgroundColor: "#fff",
                  height: "500px",
                }}
                className="shadow-lg"
              >
                <div className="detail_card p-4">
                  <div style={{ textAlign: "center" }}>
                    <div className="title ">
                      <h4>
                        Technical Analysis for{" "}
                        <Link to="#" style={{ textDecoration: "none" }}>
                          ALKS
                        </Link>
                      </h4>
                    </div>
                    <div
                      className="my-4"
                      style={{
                        margin: " auto",
                        display: "grid",
                        placeItems: "center",
                      }}
                    >
                      <GaugeChart
                        style={{ width: "50%" }}
                        nrOfLevels={5}
                        colors={["rgb(251, 84, 122)", "rgb(95, 22, 215)"]}
                        percent={0.67}
                        textColor={"black"}
                        animate={false}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "2rem",
                        justifyContent: "center",
                      }}
                    >
                      <span>
                        <div>
                          <h4>2</h4>
                        </div>
                        <div>
                          <h5>Sell</h5>
                        </div>
                      </span>
                      <span>
                        <div>
                          <h4>8</h4>
                        </div>
                        <div>
                          <h5>Neutral</h5>
                        </div>
                      </span>
                      <span>
                        <div>
                          <h4>16</h4>
                        </div>
                        <div>
                          <h5>Buy</h5>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>*/}
            <Col
              className="my-4 shadow-lg"
              lg={12}
              style={{
                marginRight: "0",
                paddingRight: "0",
                backgroundColor: "#fff",
                height: "500px",
              }}
            >
              <div>Historical Data</div>
              {/* <BottomChart /> */}
              {hisData.isSuccess ? (
                <RechartData data={hisData.data.reverse()} />
              ) : (
                <div class="d-flex justify-content-center py-5">
                  <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                </div>
              )}
            </Col>
            {/* <Col
              className="my-4 shadow-lg"
              lg={4}
              style={{
                marginLeft: "0",
                paddingLeft: "0",
                backgroundColor: "#fff",
              }}
            >
              <div>Forcast Data</div>
              <PriBottomChart />
            </Col> */}
          </Row>
        </Tab>
        {/* <Tab
          eventKey="Stock Features
"
          title="Stock Features
"
          disabled
        ></Tab> */}
      </Tabs>
    </Container>
  );
};
