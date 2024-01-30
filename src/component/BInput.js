import React from "react";
import styled from "styled-components";

function BInput(props) {
  return (
    <div>
      <Label>{props.label}</Label>
      <LabelInput>
        <TextInput />
      </LabelInput>
    </div>
  );
}

const Label = styled.div`
  position: absolute;
  margin-top: -10px;
  margin-left: 10px;
  background-color: white;
  padding: 0px 5px;
  color: #5920d7;
`;
const LabelInput = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
`;

const TextInput = styled.input`
  width: 100%;
  height: 30px;
  padding: 10px;
  border: none;
  background-color: transparent;
  font-size: large;
  outline: none;
  color: #444444;
`;

export default BInput;
