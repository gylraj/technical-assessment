import axios from "axios";
import { useEffect, useState } from "react";
import {  Col, Container, Row } from "react-bootstrap";
import PaginationBar from "../../components/PaginationBar";
import Records from "../../components/Records";
import { useDispatch, useSelector } from "react-redux";
import { storeDevices } from "../../features/device";

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.devices.value).devices;
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(12);

  useEffect(() => {
    axios
      .get("devices.json")
      .then((res) => {
        if (res.data.status === "SUCCESS") {
          dispatch(storeDevices({ devices: res.data.skus }));
        } else {
          alert("There was an error while retrieving the data");
        }
      })
      .catch((e) => {
        alert("There was an error while retrieving the data");
      });
  }, []);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Records data={currentRecords} />
            <PaginationBar
              nPages={nPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
