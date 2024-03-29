import React, { useState } from "react";
import styled from "styled-components";

const SelectBar = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <SelectOption
        id="selectOption"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        <option value="option3">Option 4</option>
        <option value="option3">Option 5</option>
      </SelectOption>
    </div>
  );
};

const SelectOption = styled.select`
  width: 100%;
  padding: 5px;
  background-color: #303030;
  border: 1px solid #303030;
  border-radius: 5px;
  color: white;
  margin-left: 10px;
`;

export default SelectBar;
