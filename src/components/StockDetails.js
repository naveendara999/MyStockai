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

  const [user, setuser] = React.useState("");
  const [color, setcolor] = React.useState("");

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

  var getInitials = function (string) {
    var names = string.split(" "),
      initials = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return setuser(initials);
  };

  function colorize(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let colour = "#";
    for (let i = 0; i < 3; i++) {
      let value = (hash >> (i * 8)) & 0xff;
      colour += ("00" + value.toString(16)).substr(-2);
    }

    return setcolor(colour);
  }

  React.useEffect(() => {
    getInitials(stock);
    colorize(stock);
    dispatch(StockHisFutActions.getStockHistoricalAction(stock));
    // dispatch(StockHisFutActions.getStockFutureAction(stock));
  }, [stock]);

  return (
    <Container className="stockdetails">
      <Col className="stock_header">
        <Col sm={4} className="stock_about">
          <Link>
            <div className="stock_logo">
              {/* <img src={alc} alt="" /> */}
              <div
                style={{
                  backgroundColor: `${color}`,
                  color: "#fff",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "32px",
                  fontWeight: "bold",
                }}
              >
                {user}
              </div>
              <div style={{ paddingLeft: "12px" }}>
                <h1>{stock}</h1>
                <div className="second_line">
                  <span>{stock}</span>
                  {/* <span>
                    <img src={alc} alt="" /> NASDQ
                  </span> */}
                </div>
              </div>
            </div>
          </Link>
        </Col>
      </Col>

      <ButtonGroup className="my-3">
        <Button onClick={() => addFavHandler()} caret>
          {putdata.isLoading ? "Loading..." : "Add to Favorite List"}
        </Button>
      </ButtonGroup>
      {putdata.isSuccess && putdata.Message === "Stock added to favourites" ? (
        <UncontrolledAlert color="success">{putdata.Message}</UncontrolledAlert>
      ) : putdata.isSuccess &&
        putdata.Message === "Stock already added to favourites" ? (
        <UncontrolledAlert color="danger">{putdata.Message}</UncontrolledAlert>
      ) : (
        ""
      )}

      <Tabs defaultActiveKey="Analysis" id="Analysis">
        <Tab eventKey="Analysis" title="Analysis">
          <Row>
            <Col lg={6} className="mt-4 mb-4">
              <div
                style={{
                  backgroundColor: "#fff",
                  minHeight: "310px",
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
                          .reverse()
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
                  minHeight: "310px",
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
                      style={{ display: "flex", justifyContent: "center" }}
                      textAlign="center"
                    >
                      <GaugeChart
                        style={{ width: "50%" }}
                        nrOfLevels={3}
                        colors={[
                          "rgb(242, 40, 36)",
                          "rgb(233, 245, 15)",
                          "rgb(106, 242, 15)",
                        ]}
                        hideText
                        percent={Math.random()}
                        textColor={"black"}
                        animate={true}
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
            <Col
              className="my-4 shadow-lg"
              lg={12}
              style={{
                marginRight: "0",
                paddingRight: "0",
                backgroundColor: "#fff",
                maxHeight: "600px",
              }}
            >
              <div style={{ padding: "5px", fontWeight: "bold" }}>
                Forecasted Data
              </div>
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
          </Row>
        </Tab>
      </Tabs>
    </Container>
  );
};
