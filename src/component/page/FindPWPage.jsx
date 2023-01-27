import React, {useState} from 'react';
import Button from '../ui/Button';
import {useNavigate} from "react-router-dom";
import * as S from "../../styles/theme";
import InputContainer from '../ui/InputContainer';

const userID = "abc";

function FindPWPage(props) {
    const navigate = useNavigate();
    const [id, setId] = useState("");

    const onChangeInput = (e) => {
        setId(e.target.value);
    }

    const onResetInput = () => {
        setId("");
    }

    const findPassword = () => {
        if(id !== ""){
            //임시 아이디 : abc
            //아이디가 있는지 찾아보기
            //있으면 비밀번호 재설정 페이지로 넘어가기
            if(id === userID){
                navigate("/resetPW");
            }
            else{
                alert("아이디를 찾을 수 없습니다.");
                onResetInput();
            }
        }
        else{
            alert("아이디를 입력하세요.");
        }
    }

    return (
        <S.Wrapper>
            <S.Header>비밀번호 찾기</S.Header>
            <S.Container>
                <S.InnerContainer>
                    <S.ContentText>비밀번호를 찾고자하는 아이디를 입력해주세요.</S.ContentText>
                    <InputContainer 
                        type="text"
                        placeholder="블로그 아이디"
                        onChange={onChangeInput}
                        value={id}
                    />
                </S.InnerContainer>
                <Button 
                    title="다음"
                    onClick={findPassword}
                /> 
            </S.Container>
            <S.Footer>
                아이디가 기억나지 않는다면? <t />
                <a href="/findID">아이디 찾기</a> 
            </S.Footer>
        </S.Wrapper>      
    );
}

export default FindPWPage;