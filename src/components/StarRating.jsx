import React from "react";
import styled from "styled-components";

const StarRating = ({ rating = 5, numReview = 1 }) => {
  return (
    <div>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <StarButton
            type="button"
            key={"star" + index}
            className={index <= rating ? "on" : "off"}
          >
            <span className="star">&#9733;</span>
          </StarButton>
        );
      })}{" "}
      | {numReview}
    </div>
  );
};

const StarButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  &.on {
    color: #ffd52d;
  }
  &.off {
    color: #ccc;
  }
`;

export default StarRating;
