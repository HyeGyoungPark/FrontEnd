import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import Button from '../ui/Button';
import InputContainer from '../ui/InputContainer';
import * as S from "../../styles/theme";

const divStyle={
    position:"relative"
}

const iStyle={
    top: "23px", 
    right: "20px", 
    position:"absolute", 
    cursor: "pointer", 
    color: "grey"
}

function ResetPWPage(props) {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        newPW: "",
        confPW: "",
    })
    const [newPWType, setNewPWType] = useState("password");
    const [confPWType, setConfPWType] = useState("password");

    const {newPW, confPW} = inputs;

    const onChange = (e) => {
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    const onReset = () => {
        setInputs({
            newPW: "",
            confPW: ""
        });

    }

    const onClickToggleNewPW = () => {
        const type = (newPWType === "password")? "text" : "password";
        setNewPWType(type);
    }

    const onClickToggleConfPW = () => {
        const confType = (confPWType === "password")? "text" : "password";
        setConfPWType(confType);
    }

    const checkPW = () => {
        //영문, 숫자, 특수문자를 포함하고 8자 이상 16자 이내로 입력해주세요.
        //숫자와 영문을 혼합해야 합니다.
        var checkNumber = newPW.search(/[0-9]/g);
        var checkEnglish = newPW.search(/[a-z]/ig);
    
        if(newPW.length < 8 || newPW.length > 16){
            alert("입력한 비밀번호는 8자 이상 16자 이내이어야 합니다.");
            onReset();
            return false;
        }
        else if(checkNumber < 0 || checkEnglish < 0){
            alert("숫자와 영문을 모두 사용해야 합니다.");
            onReset();
            return false;
        }
        else if(!/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/.test(newPW)){
            alert("숫자, 영문, 특수문자 조합을 사용해야 합니다.");
            onReset();
            return false;
        }
        else 
            return true;
    }

    const resetPW = () => {
        var checked = checkPW();
        if(checked){
            if(newPW !== "" && confPW !== ""){
                if(newPW === confPW){
                    //변경된 비밀번호 정보 넘겨주기
                    alert("비밀번호가 변경되었습니다.");
                    //login 페이지로 이동
                    navigate("..");
                }
                else{
                    alert("비밀번호 확인이 잘못 입력되었습니다.");
                }
                onReset();
            }
            else if(newPW === ""){
                alert("새 비밀번호를 입력하세요.");
            }
            else{
                alert("새 비밀번호 확인을 입력하세요.");
            }
        }
    }

    return (
        <S.Wrapper>
            <S.Header>비밀번호 재설정</S.Header>
            <S.Container>
                <S.InnerContainer>
                    <div style={divStyle}>
                        <InputContainer 
                            name="newPW"
                            type={newPWType}
                            placeholder="새 비밀번호"
                            onChange={onChange}
                            value={newPW}
                        />
                        {newPWType === "password"? 
                        <i className="far fa-eye" style={iStyle} onClick={onClickToggleNewPW}/> :
                        <i className="far fa-eye-slash" style={iStyle} onClick={onClickToggleNewPW}/> }
                    </div>
                    <div style={divStyle}>
                        <InputContainer 
                            name="confPW"
                            type={confPWType}
                            placeholder="새 비밀번호 확인"
                            onChange={onChange}
                            value={confPW}
                        />
                        {confPWType === "password"? 
                        <i className="far fa-eye" style={iStyle} onClick={onClickToggleConfPW}/> :
                        <i className="far fa-eye-slash" style={iStyle} onClick={onClickToggleConfPW}/> }
                    </div>
                </S.InnerContainer>
                <S.Condition>
                    영문, 숫자, 특수문자를 함께 사용하세요. (8자 이상 16자 이하)
                </S.Condition>
                <Button 
                    title="확인"
                    onClick={resetPW}
                />
            </S.Container>
        </S.Wrapper>
    );
}

export default ResetPWPage;