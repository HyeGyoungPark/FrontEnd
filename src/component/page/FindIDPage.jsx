import React, {useState, useRef} from 'react';
import Button from '../ui/Button';
import {useNavigate} from "react-router-dom";
import * as S from "../../styles/theme";
import InputContainer from '../ui/InputContainer';

const constName = "ㅇ";
const constEmail = "abc@abc.com";
const constAuthNo = "123456";

const helpStyle = {
    display: "none", 
    marginTop: "10px", 
    color: "#8c8c8c", 
    fontSize: "small",
    border: "1px solid #ddd",
    paddingLeft: "10px", 
    paddingRight: "5px",
}

function FindIdPage(props) {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        name: "",
        email: "",
    })
    const [disabled, setDisabled] = useState(false);
    const [authNo, setAuthNo] = useState("");
    const helpContext = useRef("none");
    const {name, email} = inputs;

    const onChangeInputs = (e) => {
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    const onResetInputs = () => {
        setInputs({
            name: "",
            email: ""
        });

    }

    const onChangeAuthNo = (e) => {
        setAuthNo(e.target.value);
    }

    const onResetAuthNo = () => {
        setAuthNo("");
    }

    const onMouseoverHB = () => {
        helpContext.current.style.display = "block";
    }

    const onMouseoutHB = () => {
        helpContext.current.style.display = "none";
    }

    const sendAuthNo = () => {
        if(name !== "" && email !== ""){
            const random = generateRandomCode();
            //메일로 random number 전송
            if(name === constName && email === constEmail){
                alert("인증번호를 발송했습니다. 인증번호가 오지 않으면 입력하신 정보가 회원정보와 일치하는지 확인해주세요. ");
                setDisabled(true);
            }    
            else{
                alert("입력하신 정보를 찾을 수 없습니다.");
                onResetInputs();
            }
        }
        else if(name === ""){
            alert("이름을 입력하세요.");
        }
        else{
            alert("이메일 주소를 입력하세요.");
        }
    }

    function generateRandomCode() {
        let random = '';
        for (let i = 0; i < 6; i++) {
            random += Math.floor(Math.random() * 10);
        }
        return random;
    }

    const findID = () => {  
        if(name !== "" && email !== ""){
            if(authNo === ""){
                alert("인증번호를 입력하지 않았습니다.");
            }
            else if(authNo !== constAuthNo){
                alert("인증번호가 일치하지 않습니다.");
                onResetAuthNo();
            }
            else{
                alert("아이디는 abc 입니다.");
                navigate("..");
            }
        }
        else if(name === ""){
            alert("이름을 입력하세요.");
        }
        else{
            alert("이메일 주소를 입력하세요.");
        }
    }

    return (
        <S.Wrapper>
            <S.Header>아이디 찾기</S.Header>
                <S.Container>
                    <S.InnerContainer>
                        <S.ContentText>등록된 이메일 주소와 입력한 이메일 주소가 같아야 <br />
                            인증번호를 받을 수 있습니다.</S.ContentText>
                        <S.Line>
                            <S.LineName>이름</S.LineName>
                            <S.LineContent>
                                <InputContainer 
                                    name="name"
                                    type="text" 
                                    onChange={onChangeInputs}
                                    value={name}
                                    disabled={disabled}
                                />
                            </S.LineContent>
                        </S.Line>
                        <S.Line>
                            <S.LineName>이메일 주소</S.LineName>
                            <S.LineContent>
                                <span>
                                    <InputContainer 
                                        name="email"
                                        type="text"
                                        onChange={onChangeInputs}
                                        value={email}
                                        disabled={disabled}
                                    />
                                    <Button 
                                        title="인증번호 받기"
                                        onClick={sendAuthNo}
                                    />
                                </span>
                            </S.LineContent>
                        </S.Line>
                        <S.Line>
                            <S.LineContent>
                                <InputContainer 
                                    type="text" 
                                    placeholder="인증번호 6자리 숫자 입력"
                                    onChange={onChangeAuthNo}
                                    value={authNo}
                                />
                            </S.LineContent>
                            <S.LineContent>
                                <S.Help onMouseOver={onMouseoverHB} onMouseOut={onMouseoutHB}>인증번호가 오지 않는다면?
                                    <div ref={helpContext} style={helpStyle}>
                                        <p>발송한 메일이 스팸 메일로 분류된 것은 아닌지 확인해 주세요. 스팸 메일함에도 없다면,
                                        다시 한 번 '인증번호 받기'를 눌러 주세요.</p>
                                    </div>
                                </S.Help>
                            </S.LineContent>
                        </S.Line>
                    </S.InnerContainer>
                    <Button 
                        title="다음"
                        onClick={findID}
                    />
                </S.Container>
                <S.Footer>
                </S.Footer>
        </S.Wrapper>
        
    );
}

export default FindIdPage;