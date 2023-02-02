import React, { useState } from "react";
import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';

function HiddenContentBox(props) {

    const {id, title, content} = props;

    return(
        <p>
            제목: {title}
            <br/>
            내용: {content}
        </p>
    );
}

export default HiddenContentBox;