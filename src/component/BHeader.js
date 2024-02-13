import React, { useEffect, useState } from "react";
import styled from "styled-components";

function BHeader(props) {
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 스크롤이 발생하면 hasShadow 상태를 true로 설정
      if (window.scrollY > 0) {
        setHasShadow(true);
      } else {
        // 스크롤이 맨 위로 돌아가면 hasShadow 상태를 false로 설정
        setHasShadow(false);
      }
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 마운트될 때만 useEffect가 실행되도록 함

  return (
    <Header hasShadow={hasShadow}>
      <HStack>
        <Logo src={require("../image/deez_logo.png")}></Logo>
        <div>Profile</div>
      </HStack>
    </Header>
  );
}

const HStack = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  padding: 10px 2vw;
  justify-content: space-between;
  align-items: center;
`;

const Header = styled.div`
  z-index: 100;
  background-color: white;
  height: 8vh;
  width: 100%;
  /* background-color: gray; */
  border: 1px solid #d9d9d9;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: sticky;
  top: 0;
  left: 0;
  box-shadow: ${(props) =>
    props.hasShadow ? "0px 2px 5px rgba(0, 0, 0, 0.2)" : "none"};
`;

const Logo = styled.div`
  font-size: xx-large;
  color: cadetblue;
  font-weight: 800;
  line-height: 8px;
`;

export default BHeader;
