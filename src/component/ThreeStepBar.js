import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ThreeStepBar = (props) => {
  const step = 3;
  return (
    <Stepsbar>
      <Textsbox>
        <div>{props.step1}</div>
        <div>{props.step2}</div>
        <div>{props.step3}</div>
      </Textsbox>
      <ProgressBarBg>
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2 }}
          // style={{
          //   height: "50px",
          //   background: "blue",
          // }}
        >
          <ProgressBar
            percent={step === 1 ? 33.3 : step === 2 ? 66.6 : 100}
          ></ProgressBar>
        </motion.div>
      </ProgressBarBg>
    </Stepsbar>
  );
};

const ProgressBarBg = styled.div`
  width: 100%;
  background-color: #d9d9d9;
  height: 10px;
`;

const ProgressBar = styled.div`
  width: ${(props) => props.percent}%;
  background-color: #4c2;
  height: 10px;
  border-radius: 10px;
  margin: 30px 0px;
`;

const Stepsbar = styled.div`
  width: 100%;
  margin: 30px 0px;
`;
const Textsbox = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 30px;
`;

export default ThreeStepBar;
