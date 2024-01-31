import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const FileUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const imageRef = useRef();
    

    const handleFileChange = (event) => {
    // 선택된 파일을 상태에 업데이트
    setSelectedFile(event.target.files[0]);

  };

  function onImageUpload() {
        if(imageRef)
        {
            imageRef.current.click()
        }
  }

    return (
        <div>
            <Clickinput onClick={onImageUpload}/>
            <Fileinput ref={imageRef} type='file' accept=".svg, .png" onChange={handleFileChange} multiple="multiple"/>
        </div>
    );
}

const Fileinput = styled.input`
    display: none;
`;

const Clickinput = styled.div`
    background-color: gray;
    width: 150px;
    height: 150px;
    margin: 30px;
`;

export default FileUpload;