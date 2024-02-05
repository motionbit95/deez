import React, { useState } from "react";
import styled from "styled-components";

const Userform = () => {
  const [name, setName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [hobby, setHobby] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhonenumberChange = (e) => {
    setPhonenumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleHobbyChange = (e) => {
    setHobby(e.target.value);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <UForm>
      <TTT>Sign Up</TTT>
      <form onSubmit={handleSignUp}>
        <UBox>
          <TLable>이름:</TLable>
          <UInput
            type="text"
            value={name}
            onChange={handleNameChange}
            required
          />
        </UBox>
        <UBox>
          <TLable>전화번호:</TLable>
          <UInput
            type="text"
            value={phonenumber}
            onChange={handlePhonenumberChange}
            required
          />
        </UBox>
        <UBox>
          <TLable>이메일:</TLable>
          <UInput
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </UBox>
        <UBox>
          <TLable>비밀번호:</TLable>
          <UInput
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </UBox>
        <UBox>
          <TLable>성별:</TLable>
          <div>
            <label>남성</label>
            <input
              type="radio"
              value="male"
              onChange={handleGenderChange}
              checked={gender === "male"}
              required
            />
            <label>여성</label>
            <input
              type="radio"
              value="female"
              onChange={handleGenderChange}
              checked={gender === "female"}
              required
            />
          </div>
        </UBox>
        <UBox>
          <TLable>취미:</TLable>
          <input
            type="checkbox"
            value={hobby}
            onChange={handleHobbyChange}
            required
          />
        </UBox>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
      {isSubmitted && (
        <UBox>
          <div>Registration Successful!</div>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Password: {password}</p>
        </UBox>
      )}
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
  padding: 10px;
`;

const UForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Userform;
