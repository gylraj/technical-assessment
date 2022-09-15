import React, { useMemo } from "react";
import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/Table";

import "bootstrap/dist/css/bootstrap.min.css";

const Records = ({ data, isLoading }) => {
  const Items = useMemo(() => {
    if (isLoading) {
      return (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      );
    }

    return data.map((item, i) => (
      <tr key={`${i}-${item.mId}`}>
        <td>{item.mId} </td>
        <td>
          <img
            width={100}
            src={item.mMobileImageUrl}
            alt={"ima"}
            loading="lazy"
          />
        </td>
        <td>{item.mShortDisplayName} </td>
        <td>$ {item.msrp} </td>
      </tr>
    ));
  }, [isLoading, data]);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Image</th>
          <th scope="col">Device Name</th>
          <th scope="col">SRP</th>
        </tr>
      </thead>
      <tbody>{Items}</tbody>
    </Table>
  );
};

export default Records;
