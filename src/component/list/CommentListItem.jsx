import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 27vw;
    padding: 1px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid grey;
    border-radius: 8px;
    cursor: pointer;
    background: white;
    :hover {
        background: lightgrey;
    }

`;

const ContentText = styled.p`
    font-size: 0.8vw;
`;

function CommentListItem(props) {
    const { comment } = props;

    return (
        <div>
            <div> hi</div>
            <Wrapper>
            
            <ContentText>{ comment.content }</ContentText>
        </Wrapper>
        </div>
        
    );
}

export default CommentListItem;