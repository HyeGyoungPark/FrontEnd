import React, { useState } from "react";
import styled from "styled-components";
import { Button } from '@mui/material';
import { Input } from "antd"

import * as resize from "../ui/resize.js"
import Images from "./WriteImage"
import axios from "axios";


//화면의 중앙에 위치시킴
const Wrapper = styled.div`
  padding: 16px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WrapperBtn = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;
  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

const { TextArea } = Input

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
        if(imageListLength + filesLength > 10) {
            alert('이미지는 10장을 초과할 수 없습니다.');
            return;
        }

        //프리뷰
        for (let i=0; i<filesLength; i++){
            let newImage = await resize.handleResize(fileArr[i]);
            SetImageList((imageList) => [...imageList, newImage]);
        }
        e.target.value = '';

        SetContentList([...contentList,]);
    };

    function preSubmit() {};

    function finalSubmit() {};    

    return (
        <Wrapper>
            <Container>
            <TextArea
                type="text" value={title}
                onChange={(e) => {
                    SetTitle(e.target.value);
                }}
                autoSize={{ minRows: 1, maxRows: 1}}/>

                <input
                    type="file"
                    id="upload-file"
                    accept="image/*"
                    multiple
                    onChange={uploadFile}/>
                <Images imageList={imageList} getImageList={getImageList} contentList={contentList} SetContentList={SetContentList}/>
                </Container> 

                <WrapperBtn>
                <Button 
                type="submit" 
                variant="outlined" 
                sx={{ //css 적용
                    mt: 3,
                    pr: 11,
                    pl: 11,
                    color: 'white',
                    border: '1px solid skyblue',
                    borderRadius: '10px',
                    backgroundColor: 'skyblue',
                    // "&.Mui[mui이름]-root:[event 속성]" : {}로 기본적으로 적용된 css를 변경시킬 수 있다.
                    // "&.MuiButton-root:hover" : {}로 기본적으로 탑재되어있는 css를 바꿈
                    "&.MuiButton-root:hover":{
                    color: 'skyblue',
                    borderColor: 'skyblue'
                    }
                }}
                onClick={() => {preSubmit()}}>임시 저장</Button>

                <Button 
                type="submit" 
                variant="outlined" 
                sx={{ //css 적용
                    mt: 3,
                    pr: 11,
                    pl: 11,
                    color: 'white',
                    border: '1px solid skyblue',
                    borderRadius: '10px',
                    backgroundColor: 'skyblue',
                    // "&.Mui[mui이름]-root:[event 속성]" : {}로 기본적으로 적용된 css를 변경시킬 수 있다.
                    // "&.MuiButton-root:hover" : {}로 기본적으로 탑재되어있는 css를 바꿈
                    "&.MuiButton-root:hover":{
                    color: 'skyblue',
                    borderColor: 'skyblue'
                    }
                }}
                onClick={() => {finalSubmit()}}>글 올리기</Button>
                </WrapperBtn>
        </Wrapper>
    );
}

export default WritePage;