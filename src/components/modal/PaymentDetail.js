import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { faUserCircle, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import SplitForm from "../stripe/splitFrom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51JVgfvAEYR3520CFl30fAP4wda21LUtAJOb3v18VXEeO6dZ79F1qWD5Fpk4u7JW2npI5mkHt2PlipEqk81yM6lzh00n0BKgceW"
);

const PaymentDetail = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(true);
  const [plan, setplan] = useState({
    id: "",
    price: "",
  });

  const toggle = () => {
    setModal(!modal);
    setplan({
      id: "",
      price: "",
    });
  };

  return (
    <div>
      <Button onClick={toggle}>{buttonLabel}</Button>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className={className}
        style={{ maxWidth: "1000px" }}
      >
        <ModalHeader toggle={toggle}>Please Select Premium Plan </ModalHeader>
        <ModalBody>
          <div style={{ display: "flex" }}>
            <Card
              style={{ margin: "0 10px", cursor: "pointer" }}
              onClick={() => setplan({ ...plan, id: 1, price: 29.99 })}
            >
              <CardBody>
                <CardTitle tag="h5">Plan 1</CardTitle>
                <CardText>
                  To Analyse and view our full stocks list of around 200 stocks
                  please subscribe to our monthly package.
                </CardText>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <CardTitle tag="h5">$29.99/month</CardTitle>
                  {plan.id === 1 && (
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      size="1x"
                      color="black"
                    />
                  )}
                </div>
              </CardBody>
            </Card>
            <Card
              style={{ margin: "0 10px", cursor: "pointer" }}
              onClick={() => setplan({ ...plan, id: 2, price: 79.99 })}
            >
              <CardBody>
                <CardTitle tag="h5">Plan 2</CardTitle>
                <CardText>
                  To Analyse and view our full stocks list of around 200 stocks
                  please subscribe to our three month package with discount.
                </CardText>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <CardTitle tag="h5">$79.99/3months</CardTitle>
                  {plan.id === 2 && (
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      size="1x"
                      color="black"
                    />
                  )}
                </div>
              </CardBody>
            </Card>
          </div>
        </ModalBody>
        <ModalFooter style={{ justifyContent: "center" }}>
          {plan.id && (
            <Elements stripe={stripePromise}>
              <SplitForm amount={plan.price} />
            </Elements>
          )}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default PaymentDetail;
