import styled from 'styled-components';

export const Wrapper = styled.div`
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -20%);
    width: 500px;
    height: 50%;
`;

export const Container = styled.div`
    text-align: center;
`;

export const InnerContainer = styled.div`
    border-top: 5px solid skyblue;
    border-bottom: 5px solid skyblue;
    margin: 10px;
    padding: 30px;
`;

export const Header = styled.div`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin: 15px;
`;

export const Footer = styled.div`
    text-align: center;
    margin: 10px;
`;

export const ContentText = styled.p`
    font-size: 14px;
`;

export const Line = styled.dl`
    padding: 0 20px 0 0;
`;

export const LineName = styled.dt` 
    float: left; 
    width: 100px; 
    margin-top: 15px;
`;

export const LineContent = styled.dd`
    text-align: left;
    margin-left: 120px;
`;

export const Help = styled.div`
    color: #8c8c8c; 
    font-size: small;
    margin-left: 10px;
    width: 110%;
`;

export const Condition = styled.div`
    color: #8c8c8c; 
    font-size: small;
    margin: 20px;
`;