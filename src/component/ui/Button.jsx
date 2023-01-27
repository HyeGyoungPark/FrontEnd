import React from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
    margin: 10px;
    border-radius: 20px;
    border: 3px solid skyblue;
    background-color: #f6f5f7;
    font-size: 14px;
    font-weight: bold;
    padding: 12px 30px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    cursor: pointer;
`;

function Button(props) {
    const {title, onClick} = props;
    
    return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>
}

export default Button;