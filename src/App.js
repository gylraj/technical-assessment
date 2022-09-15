import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Records from "./components/Records";
import Pagination from "./components/Pagination";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  useEffect(() => {
    axios
      .get("devices.json")
      .then((res) => {
        if (res.data.status === "SUCCESS") {
          setData(res.data.skus);
        } else {
          alert("There was an error while retrieving the data");
        }

        setLoading(false);
      })
      .catch(() => {
        alert("There was an error while retrieving the data");
      });
  }, []);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage);

  return (
    <div className="container mt-5">
      <h2> Device List </h2>
      <Records data={currentRecords} isLoading={loading} />
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
