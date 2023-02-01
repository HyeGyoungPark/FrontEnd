import React, { useState } from "react";
import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';


function ContentBox({Move}){ // 상위 component에서 전달한 이름 그대로 받기
    const [visible, SetVisible] = useState(false);

    return(
        <Grid item xs={12} sm={2.4}>
            <Box
                sx={{
                    width: '100%',
                    height: '18vh',
                    border: '1px solid skyblue',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    "&.MuiBox-root:hover":{
                        backgroundColor: 'lightgray'
                    }
                }}
                onMouseOver={()=>{ // 마우스 올리면 Link 보이게 
                    SetVisible(true);
                }}
                onMouseOut={()=>{ // 마우스 내리면 Link 안보이게 
                    SetVisible(false);
                }}
            >
                {
                    visible 

                    && 

                    <Button
                        style={{
                            marginTop: '25%',
                            border: '1px solid skyblue'
                        }}

                        onClick={
                            Move // 여기에 받은 이름 써주기 
                        }
                    >
                        글 보기!
                    </Button>
                }
                
            </Box>
        </Grid>
    );
}

export default ContentBox;