import React, { useState } from "react";
import { Tabs, Tab, Table, Button, Spinner } from "react-bootstrap";
import { Link, StaticRouter, useHistory } from "react-router-dom";
import {
  Container,
  Col,
  Row,
  Form,
  FormGroup,
  Input,
  UncontrolledAlert,
} from "reactstrap";
import SectorsCard from "./SectorsCard";
import * as StockActions from "../../../redux/actions/stockListActions";
import * as FavStockActions from "../../../redux/actions/favStockActions";
import * as StockHisFutActions from "../../../redux/actions/stockHisFutureActions";
import * as AppActions from "../../../redux/actions/appActions";
import * as AuthActions from "../../../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import PaymentDetail from "../../modal/PaymentDetail";
function TopPicks() {
  const tableHeader = [
    "Stock name",
    "date",
    "close",
    "high",
    "low",
    "open",
    "volume",
    "adjClose",
    "adjHigh",
    "adjLow",
    "adjOpen",
    "adjVolume",
    "divCash",
    "splitFactor",
  ];

  const [Loading, setLoading] = React.useState("");

  const dispatch = useDispatch();
  const history = useHistory();
  const UserEmail = localStorage.getItem("UserEmail");
  const UserPassword = localStorage.getItem("UserPassword");
  const state = useSelector((state) => state);
  const favList = useSelector((state) => state.favStockData.getFavData);
  const putdata = useSelector((state) => state.favStockData.putFavData);
  const stockList = useSelector((state) => state.stockListData);

  React.useEffect(() => {
    if (!state.authData.loginData.isSuccess) {
      dispatch(AuthActions.loginAction(UserEmail, UserPassword));
    }
    dispatch(StockActions.stockListAction());
    dispatch(AppActions.clearReducerAction());
  }, []);

  React.useEffect(() => {
    dispatch(FavStockActions.getFavStockListAction(UserEmail));
  }, [putdata.isSuccess]);

  const getStockDetials = (stock) => {
    history.push(`/stockdetails/${stock}`);
  };

  const removeFavHandler = (stock) => {
    setLoading(stock);
    dispatch(FavStockActions.removeFavStockListAction(UserEmail, stock));
  };
  const five_stock = ["GOOG","FB","MSFT","AMZN","AAPL"]
  return (
    <Container style={{ marginTop: "160px" }} className="toppicks">
      <Tabs defaultActiveKey="Top picks in uptrend" id="StocklistTab">
        <Tab eventKey="Top picks in uptrend" title="Top picks in uptrend">
          <div className="tab_slogen py-3">
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
                  <th scope="row">{name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {state.authData.loginData.subscribed
                ? stockList.data &&
                  state.authData.loginData.isSuccess &&
                  stockList.data
                    .filter((item) =>
                      item.symbol.includes(state.appData.search.toUpperCase())
                    )
                    .map((list, index) => (
                      <tr>
                        <td onClick={() => getStockDetials(list.symbol)}>
                          <Link>{list.symbol}</Link>
                        </td>
                        <td>{list.date}</td>
                        <td>{list.close}</td>
                        <td>{list.high}</td>
                        <td>{list.low}</td>
                        <td>{list.open}</td>
                        <td>{list.volume}</td>
                        <td>{list.adjClose}</td>
                        <td>{list.adjHigh}</td>
                        <td>{list.adjLow}</td>
                        <td>{list.adjOpen}</td>
                        <td>{list.adjVolume}</td>
                        <td>{list.divCash}</td>
                        <td>{list.splitFactor}</td>
                      </tr>
                    ))
                : stockList.data &&
                  state.authData.loginData.isSuccess &&
                  stockList.data
                    .slice(0, 5)
                    .filter((item) =>
                      item.symbol.includes(state.appData.search.toUpperCase())
                    )
                    .map((list, index) => (
                      <tr>
                        <td onClick={() => getStockDetials(list.symbol)}>
                          <Link>{list.symbol}</Link>
                        </td>
                        <td>{list.date}</td>
                        <td>{list.close}</td>
                        <td>{list.high}</td>
                        <td>{list.low}</td>
                        <td>{list.open}</td>
                        <td>{list.volume}</td>
                        <td>{list.adjClose}</td>
                        <td>{list.adjHigh}</td>
                        <td>{list.adjLow}</td>
                        <td>{list.adjOpen}</td>
                        <td>{list.adjVolume}</td>
                        <td>{list.divCash}</td>
                        <td>{list.splitFactor}</td>
                      </tr>
                    ))}
            </tbody>
          </Table>

          <div class="d-flex justify-content-end payment">
            {!state.authData.loginData.subscribed &&
              state.authData.loginData.isSuccess && (
                <PaymentDetail buttonLabel="See More" />
              )}
          </div>

          {(stockList.isLoading || state.authData.loginData.isLoading) && (
            <div class="d-flex justify-content-center py-5">
              <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          )}
        </Tab>

        {/* tab2 */}

        <Tab eventKey="Favorites" title="Favorite">
          <Col lg={12} className="favorites">
            <ul class="list-group">
              {putdata.isSuccess &&
              putdata.Message === "Stock removed from favourites" ? (
                <UncontrolledAlert color="success">
                  {putdata.Message}
                </UncontrolledAlert>
              ) : (
                ""
              )}
              {favList.Stocks && favList.isSuccess ? (
                favList.Stocks.map((item, index) => (
                  <li
                    key={index}
                    class="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <Link to={"/stockdetails/" + item}> {item}</Link>
                    <Button
                      class="badge badge-primary badge-pill"
                      onClick={() => removeFavHandler(item)}
                    >
                      {putdata.isLoading && item === Loading
                        ? "Loading..."
                        : "Remove"}
                    </Button>
                  </li>
                ))
              ) : favList.isLoading ? (
                <div class="d-flex justify-content-center py-5">
                  <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                </div>
              ) : (
                <p className="py-5">
                  Look's like you have nothing in your favorites.
                </p>
              )}
            </ul>
          </Col>
        </Tab>
      </Tabs>

      {/* <Col lg={12} className="pt-4 mb-5">
        <h2>Uptrend by Sectors</h2>
        <p className="mb-3">
          All the sectors in the market and number of stocks uptrending in each
          sector. Click on 'Get List' to see all the stocks.
        </p>
        <Row>
          <SectorsCard
            title={"Card Title"}
            text="Some quick example text to build on the card title and make up
                  the bulk of the card's content."
            linkpath="/"
            buttonText="Go somewhere"
          />
          <SectorsCard
            title={"Card Title"}
            text="Some quick example text to build on the card title and make up
                  the bulk of the card's content."
            linkpath="/"
            buttonText="Go somewhere"
          />
          <SectorsCard
            title={"Card Title"}
            text="Some quick example text to build on the card title and make up
                  the bulk of the card's content."
            linkpath="/"
            buttonText="Go somewhere"
          />
          <SectorsCard
            title={"Card Title"}
            text="Some quick example text to build on the card title and make up
                  the bulk of the card's content."
            linkpath="/"
            buttonText="Go somewhere"
          />
          <SectorsCard
            title={"Card Title"}
            text="Some quick example text to build on the card title and make up
                  the bulk of the card's content."
            linkpath="/"
            buttonText="Go somewhere"
          />
          <SectorsCard
            title={"Card Title"}
            text="Some quick example text to build on the card title and make up
                  the bulk of the card's content."
            linkpath="/"
            buttonText="Go somewhere"
          />
          <SectorsCard
            title={"Card Title"}
            text="Some quick example text to build on the card title and make up
                  the bulk of the card's content."
            linkpath="/"
            buttonText="Go somewhere"
          />
          <SectorsCard
            title={"Card Title"}
            text="Some quick example text to build on the card title and make up
                  the bulk of the card's content."
            linkpath="/"
            buttonText="Go somewhere"
          />
          <SectorsCard
            title={"Card Title"}
            text="Some quick example text to build on the card title and make up
                  the bulk of the card's content."
            linkpath="/"
            buttonText="Go somewhere"
          />
          <SectorsCard
            title={"Card Title"}
            text="Some quick example text to build on the card title and make up
                  the bulk of the card's content."
            linkpath="/"
            buttonText="Go somewhere"
          />
          <SectorsCard
            title={"Card Title"}
            text="Some quick example text to build on the card title and make up
                  the bulk of the card's content."
            linkpath="/"
            buttonText="Go somewhere"
          />
          <SectorsCard
            title={"Card Title"}
            text="Some quick example text to build on the card title and make up
                  the bulk of the card's content."
            linkpath="/"
            buttonText="Go somewhere"
          />
        </Row>
      </Col> */}
    </Container>
  );
}

export default TopPicks;
