import React from "react";
import { useLocation } from "react-router-dom";

function ResultForm(props) {
  const location = useLocation();
  // query string을 가져오려면 location.search를 사용
  const queryParams = new URLSearchParams(location.search);
  const result = queryParams
    ? {
        name: queryParams.get("name"),
        email: queryParams.get("email"),
        password: queryParams.get("password"),
        phonenumber: queryParams.get("phonenumber"),
        gender: queryParams.get("gender"),
        hobby: queryParams.get("hobby"),
      }
    : location.state;
  return (
    <div>
      <div>{result.name}</div>
      <div>{result.email}</div>
      <div>{result.password}</div>
      <div>{result.phonenumber}</div>
      <div>{result.gender}</div>
      <div>{result.hobby}</div>
    </div>
  );
}

export default ResultForm;
