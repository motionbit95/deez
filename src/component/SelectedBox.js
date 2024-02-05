import React, { useState } from "react";
import styled from "styled-components";

const SelectedBox = () => {
  const [selectedBox, setSelectedBox] = useState(1);

  // const handleBoxClick = (value) => {
  //   setSelectedBox(value);
  // };

  function RadioContent(value, text, title, discription) {
    return (
      <div>
        <input
          onChange={(e) => {
            console.log(value);
            setSelectedBox(value);
          }}
          type="radio"
          name={text}
          value={value}
        />
        <div>
          <div className="d5">{title}</div>
          <div className="d8">{discription}</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {selectedBox === 1 ? (
        <SelectBox>
          {RadioContent(
            1,
            "Free",
            "Free pack",
            "This is my pack that I want to offer for free on the Iconfinder marketplace"
          )}
        </SelectBox>
      ) : (
        <Boxon>
          {RadioContent(
            1,
            "Free",
            "Free pack",
            "This is my pack that I want to offer for free on the Iconfinder marketplace"
          )}
        </Boxon>
      )}
      {selectedBox === 2 ? (
        <SelectBox>
          {RadioContent(
            2,
            "Free",
            "Free pack",
            "This is my pack that I want to offer for free on the Iconfinder marketplace"
          )}
        </SelectBox>
      ) : (
        <Boxon>
          {RadioContent(
            2,
            "Free",
            "Free pack",
            "This is my pack that I want to offer for free on the Iconfinder marketplace"
          )}
        </Boxon>
      )}
      {selectedBox === 3 ? (
        <SelectBox>
          {RadioContent(
            3,
            "Free",
            "Free pack",
            "This is my pack that I want to offer for free on the Iconfinder marketplace"
          )}
        </SelectBox>
      ) : (
        <Boxon>
          {RadioContent(
            3,
            "Free",
            "Free pack",
            "This is my pack that I want to offer for free on the Iconfinder marketplace"
          )}
        </Boxon>
      )}
    </div>
  );
};

const SelectBox = styled.div`
  border: 1px solid blue;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
`;

const Boxon = styled.div`
  border: 1px solid gray;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
`;

export default SelectedBox;
