import React, { useState , useRef } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import { Input } from "antd";
import Sidebar from "./Sidebar.jsx";
import * as resize from "../ui/resize.js";
import Images from "./WriteImage";
import axios from "axios";
import { width } from "@mui/system";

//화면의 중앙에 위치시킴

const Wrapper = styled.div`
  padding: 16px;
  width: calc(100% - 32px);
  height : flex;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid skyblue;
  background-color: skyblue;

  display: grid;
`;

const WrapperBtn = styled.div`
  padding: 16px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: white;
`;
//   border: 1px solid blue;

const Container = styled.div`
  width: 200vw;
  
  border: 1px solid black;
  background-color: white;
  max-width: 720px;
  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

const { TextArea } = Input;

function WritePage(props) {
  const [title, SetTitle] = useState("");
  const [imageList, SetImageList] = useState([]);
  const [contentList, SetContentList] = useState([]);

  const getImageList = (newImageList) => {
    SetImageList(newImageList);
  };

  const uploadFile = async (e) => {
    let fileArr = e.target.files;
    let imageListLength = imageList.length;
    let filesLength = fileArr.length > 10 ? 10 : fileArr.length; //최대 10개
    if (imageListLength + filesLength > 10) {
      alert("이미지는 10장을 초과할 수 없습니다.");
      return;
    }

    //프리뷰
    for (let i = 0; i < filesLength; i++) {
      let newImage = await resize.handleResize(fileArr[i]);
      SetImageList((imageList) => [...imageList, newImage]);
    }
    e.target.value = "";

    SetContentList([...contentList]);
  };

  function preSubmit() {}

  function finalSubmit() {}


  const imageInput = useRef();
  const onCickImageUpload = () => {
    imageInput.current.click();
  };

  return (


    
    <Wrapper>
        <Sidebar/>
      <Container
        style={{
          padding: "2vw",
          alignItems: "center",
          placeItems: "center",
          display: "grid",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "skyblue",
            textAlign: "center",
          }}
        >
          Title
        </h1>
        <TextArea
          style={{
            width: "70%",
          }}
          type="text"
          value={title}
          onChange={(e) => {
            SetTitle(e.target.value);
          }}
          autoSize={{ minRows: 1, maxRows: 1 }}
        />
        <Button onClick={onCickImageUpload}>파일 업로드</Button>
        <input
            ref={imageInput}
          type="file"
          id="upload-file"
          accept="image/*"
          multiple
          onChange={uploadFile}
          style = {{display : "none"}}
        />
        <Images
          imageList={imageList}
          getImageList={getImageList}
          contentList={contentList}
          SetContentList={SetContentList}
        />
      </Container>

      <Container
        style={{
          padding: "2vw",
          alignItems: "center",
          placeItems: "center",
          display: "grid",
          textAlign: "center",
        }}
      >
        <WrapperBtn>
          <Button
            type="submit"
            variant="outlined"
            sx={{
              //css 적용
              mt: 3,
              pr: 11,
              pl: 11,
              color: "white",
              border: "1px solid skyblue",
              borderRadius: "10px",
              backgroundColor: "skyblue",
              // "&.Mui[mui이름]-root:[event 속성]" : {}로 기본적으로 적용된 css를 변경시킬 수 있다.
              // "&.MuiButton-root:hover" : {}로 기본적으로 탑재되어있는 css를 바꿈
              "&.MuiButton-root:hover": {
                color: "skyblue",
                borderColor: "skyblue",
              },
            }}
            onClick={() => {
              preSubmit();
            }}
          >
            임시 저장
          </Button>

          <Button
            type="submit"
            variant="outlined"
            sx={{
              //css 적용
              mt: 3,
              pr: 11,
              pl: 11,
              color: "white",
              border: "1px solid skyblue",
              borderRadius: "10px",
              backgroundColor: "skyblue",
              // "&.Mui[mui이름]-root:[event 속성]" : {}로 기본적으로 적용된 css를 변경시킬 수 있다.
              // "&.MuiButton-root:hover" : {}로 기본적으로 탑재되어있는 css를 바꿈
              "&.MuiButton-root:hover": {
                color: "skyblue",
                borderColor: "skyblue",
              },
            }}
            onClick={() => {
              finalSubmit();
            }}
          >
            글 올리기
          </Button>
        </WrapperBtn>
      </Container>
    </Wrapper>

  );
}

export default WritePage;
