import React, { useState } from "react";
import styled from "styled-components";

const BSwitch = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSwitch = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div>
      <SwitchContainer active={isActive} onClick={toggleSwitch}>
        <Indicator active={isActive} />
      </SwitchContainer>
    </div>
  );
};

const SwitchContainer = styled.div`
  position: relative;
  margin-left: 10px;
  width: 44px;
  height: 24px;
  background-color: ${({ active }) => (active ? "green" : "#ccc")};
  border-radius: 20px;
  cursor: pointer;
`;

const Indicator = styled.div`
  position: absolute;
  top: 1px;
  left: 1px;
  width: 16px;
  height: 16px;
  background-color: #fff;
  border-radius: 50%;
  transition: transform 0.3s ease-in-out;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4); /* 그림자 효과 */
  border: 2px solid;
  border-color: ${({ active }) => (active ? "green" : "#ccc")};
  transform: ${({ active }) => (active ? "translateX(20px)" : "translateX(0)")};
`;

export default BSwitch;
