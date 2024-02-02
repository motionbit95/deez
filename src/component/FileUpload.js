import React, { useRef, useState } from "react";
import styled from "styled-components";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const imageRef = useRef();
  const imageDisplay = useRef();

  const handleFileChange = (event) => {
    // 선택된 파일을 상태에 업데이트
    setSelectedFile(event.target.files[0]);

    // 이미지를 가지고 와야겠지.
    if (event.target.files[0]) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const imageDisplay = document.getElementById("imageDisplay");
        imageDisplay.src = e.target.result;
      };

      // 파일을 Base64로 인코딩
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  function onImageUpload() {
    if (imageRef) {
      imageRef.current.click();
    }
  }

  return (
    <div>
      <Clickinput onClick={onImageUpload}>
        <img id="imageDisplay" src={require("../image/mail.png")} />
      </Clickinput>
      <Fileinput
        ref={imageRef}
        type="file"
        accept=".svg, .png"
        onChange={handleFileChange}
        multiple="multiple"
      />
    </div>
  );
};

const Fileinput = styled.input`
  display: none;
`;

const Clickinput = styled.div`
  border: 1px solid gray;
  width: 200px;
  height: 200px;
  margin: 30px;
`;

export default FileUpload;
