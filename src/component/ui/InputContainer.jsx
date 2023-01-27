import React from 'react';
import styled from "styled-components";

const StyedInput = styled.input`
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 10px 0;
    width: 90%;
`;

function InputContainer(props) {
    const {name, type, placeholder, onChange, value, disabled} = props;

    return (
        <div>
            <StyedInput name={name} type={type} placeholder={placeholder} onChange={onChange} value={value} disabled={disabled}/>
        </div>
    );
}

export default InputContainer;