import React from "react";
import Pagination from "react-bootstrap/Pagination";

const PaginationBar = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  let items = [];

  items.push(
    <Pagination.First key="FirstPage" onClick={() => setCurrentPage(1)} />
  );
  items.push(
    <Pagination.Item key="prevPage" onClick={prevPage}>
      Previous
    </Pagination.Item>
  );
  for (let number of pageNumbers) {
    //previous
    const prevPageDiff = pageNumbers.length - currentPage;

    const prevPageCounter = prevPageDiff > 1 ? 2 : 4 - prevPageDiff;

    if (currentPage - prevPageCounter > number) {
      continue;
    }

    if (number === currentPage - prevPageCounter && number !== 1) {
      items.push(<Pagination.Ellipsis key="Ellipsis-1" />);
    }

    const nextPageDiff = 5 - currentPage;

    const nextPageCounter = nextPageDiff < 2 ? 2 : nextPageDiff;
    //nextpages
    if (currentPage + nextPageCounter < number) {
      continue;
    }

    items.push(
      <Pagination.Item
        key={number}
        onClick={() => setCurrentPage(number)}
        active={number === currentPage}
      >
        {number}
      </Pagination.Item>
    );

    if (
      number === currentPage + nextPageCounter &&
      number !== pageNumbers.length
    ) {
      items.push(<Pagination.Ellipsis key="Ellipsis-2" />);
    }
  }
  items.push(
    <Pagination.Item key="nextPage" onClick={nextPage}>
      Next
    </Pagination.Item>
  );
  items.push(
    <Pagination.Last
      key="LastPage"
      onClick={() => setCurrentPage(pageNumbers.length)}
    />
  );

  return (
    <>
      <div className="d-flex justify-content-center">
        <Pagination>{items}</Pagination>
      </div>
    </>
  );
};

export default PaginationBar;
