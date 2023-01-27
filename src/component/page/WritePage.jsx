import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

//화면의 중앙에 위치시킴
const Position = styled.div`
    position : absolute;
    top : 50%;
    left : 50%;
    transform : translate(-50%, -50%);
`;

//너비, 그림자 설정
const WriteBox = styled.div`
    position : absolute;
    top : 50%;
    left : 50%;
    transform : translate(-50%, -50%);
`;

function WritePage(props) {

    return (
        <WriteBox>            
        <p>제목</p>
        <p><input type="text" name="subject" id="title"/></p>
    
        <p><input type="file" id="picfile"/></p>
    
        <p>내용</p>
        <p><textarea name="content" id="contents"></textarea></p>


        <input type="submit" placeholder="임시 저장" id="presave"/>
        <input type="submit" id="save"></input>
    

        </WriteBox>    
    );
}

export default WritePage;