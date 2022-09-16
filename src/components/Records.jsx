import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import DeviceCard from "./DeviceCard";
import styled from "styled-components";

const Records = ({ data }) => {
  const navigate = useNavigate();

  const deviceList = data.map((item, i) => {
    return (
      <Col xs={12} md={3} lg={3} key={`item ${item.mId}`} className="mb-6">
        <DeviceCard device={item} onClick={() => navigate(`/${item.mId}`)} />
      </Col>
    );
  });

  return (
    <>
      <Wrapper>
        <Row>{deviceList}</Row>
      </Wrapper>
    </>
  );
};

const Wrapper = styled(Container)`
  margin: 50px 0;
`;

export default Records;
