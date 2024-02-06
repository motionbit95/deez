import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Userform = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, serFormData] = useState({
    name: "",
    phonenumber: "",
    email: "",
    password: "",
    gender: "",
    hobby: [],
  });

  const handleInputChange = (e) => {
    const { name, value, checked } = e.target;

    // console.log(name, value, checked);
    serFormData({ ...formData, [name]: value });

    if (name === "hobby") {
      if (checked) {
        // 추가
        serFormData({ ...formData, [name]: [...formData.hobby, value] });
      } else {
        // 제외
        serFormData({
          ...formData,
          [name]: formData.hobby?.filter((hobby) => hobby !== value),
        });
      }
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    console.log(formData);
    setIsSubmitted(true);

    // 1. navigate를 통해 url에 데이터를 담지 않고 보내는 방식
    // navigate("/result", { state: formData });

    // 2. url query에 데이터를 담아서 보내는 방식(직접 호출할 때, 권장치 않음)
    const params = new URLSearchParams();
    params.append("name", formData.name);
    params.append("email", formData.email);
    params.append("phonenumber", formData.phonenumber);
    params.append("password", formData.password);
    params.append("gender", formData.gender);
    params.append("hobby", formData.hobby);

    const queryString = params.toString();
    console.log(queryString);

    const url = `/result?${queryString}`;
    navigate(url);
  };

  return (
    <UForm>
      <TTT>Sign Up</TTT>
      <form onSubmit={handleSignUp}>
        <UBox>
          <TLable>이름:</TLable>
          <UInput
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </UBox>
        <UBox>
          <TLable>전화번호:</TLable>
          <UInput
            name="phonenumber"
            type="text"
            value={formData.phonenumber}
            onChange={handleInputChange}
            required
          />
        </UBox>
        <UBox>
          <TLable>이메일:</TLable>
          <UInput
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </UBox>
        <UBox>
          <TLable>비밀번호:</TLable>
          <UInput
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </UBox>
        <UBox>
          <TLable>성별:</TLable>
          <div>
            <label>남성</label>
            <input
              name="gender"
              type="radio"
              value="male"
              onChange={handleInputChange}
              checked={formData.gender === "male"}
              required
            />
            <label>여성</label>
            <input
              name="gender"
              type="radio"
              value="female"
              onChange={handleInputChange}
              checked={formData.gender === "female"}
              required
            />
          </div>
        </UBox>
        <UBox>
          <TLable>취미:</TLable>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <input
              name="hobby"
              type="checkbox"
              value={1}
              onChange={handleInputChange}
              required
            />
            <div>음악감상</div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <input
              name="hobby"
              type="checkbox"
              value={2}
              onChange={handleInputChange}
              required
            />
            <div>영화감상</div>
          </div>
        </UBox>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </UForm>
  );
};

const UInput = styled.input`
  border: 1px solid blue;
  border-radius: 2px;
  height: 20px;
  display: flex;
  align-items: center;
`;

const TTT = styled.div`
  font-size: 30px;
  margin: 10px;
  display: flex;
`;

const TLable = styled.label`
  display: flex;
  align-items: center;
  font-size: 20px;
`;

const UBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const UForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Userform;
