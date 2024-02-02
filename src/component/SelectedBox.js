import React, { useState } from "react";
import styled from "styled-components";

const SelectedBox = () => {
  const [selectedBox, setSelectedBox] = useState(null);

  const handleBoxClick = (value) => {
    setSelectedBox(value);
  };

  return (
    <>
      <div
        className={selectedBox === 1 ? 1 : <Box />}
        onClick={() => handleBoxClick(1)}
      >
        <input
          onChange={(e) => {
            setSelectedBox(e.target.value);
          }}
          type="radio"
          name="pack"
          value="1"
        />
        <div>
          <div className="d5">Premium pack</div>
          <div className="d8">
            This is a premium pack I want to sell on the Iconfinder marketplace.
          </div>
        </div>
      </div>
      <div
        className={selectedBox === 2 ? 2 : <Box />}
        onClick={() => handleBoxClick(2)}
      >
        <input
          onChange={(e) => {
            setSelectedBox(e.target.value);
          }}
          type="radio"
          name="pack"
          value="2"
        />
        <div>
          <div className="d5">Free pack</div>
          <div className="d8">
            This is my pack that I want to offer for free on the Iconfinder
            marketplace
          </div>
        </div>
      </div>
      <div>
        <div
          className={selectedBox === 3 ? 3 : <Box />}
          onClick={() => handleBoxClick(3)}
        >
          <input
            onChange={(e) => {
              setSelectedBox(e.target.value);
            }}
            type="radio"
            name="pack"
            value="3"
          />
          <div>
            <div className="d5">Someone else's free pack</div>
            <div className="d8">
              This is someone else's pack that's available elsewhere.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Boxon = styled.div`
  display: flex;
  border: 1px solid #000;
  flex-direction: column;
`;

const Box = styled.div`
  width: 100%;
  padding: 10px;
  margin: 10px;
  border: 1px solid #000;
  cursor: pointer;
  background-color: ${(props) =>
    props.isSelected ? "lightblue" : "transparent"};
`;

// const BoxContainer = styled.div`
//   border: 1px solid hsl(0, 0%, 61%);
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   gap: 10px;
// `;

// const Box = styled.div`
//   border: 1px solid hsl(218, 40%, 48%);
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   gap: 10px;
// `;

export default SelectedBox;
