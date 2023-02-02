import React, { useState, useRef, useEffect } from "react";
import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import ContentBox from "./ContentBox";
import HiddenContentBox from "./HiddenContentBox";

const list = [
    {id: 1, title: '제목1', content: '글1'},
    {id: 2, title: '제목2', content: '글2'},
    {id: 3, title: '제목3', content: '글3'},
    {id: 4, title: '제목4', content: '글4'},
    {id: 5, title: '제목5', content: '글5'},

    {id: 6, title: '제목6', content: '글6'},
    {id: 7, title: '제목7', content: '글7'},
    {id: 8, title: '제목8', content: '글8'},
    {id: 9, title: '제목9', content: '글9'},
    {id: 10, title: '제목10', content: '글10'},

    {id: 11, title: '제목11', content: '글11'},
    {id: 12, title: '제목12', content: '글12'},
    {id: 13, title: '제목13', content: '글13'},
    {id: 14, title: '제목14', content: '글14'},
    {id: 15, title: '제목15', content: '글15'},

    {id: 16, title: '제목16', content: '글16'},
    {id: 17, title: '제목17', content: '글17'},
    {id: 18, title: '제목18', content: '글18'},
    {id: 19, title: '제목19', content: '글19'},
    {id: 20, title: '제목20', content: '글20'}
]

function ContentGrid(){

    const [visible, setVisible] = useState(false); //-> delay 없애는 것 필요
    const move = useRef(); // 이런 input , button component에만 적용됨
    const stay = useRef(); // focus 이동시킬 때 사용

    const Move = () => {
        setVisible(true); // 글 자세히 보기 창과 댓글 쓰기 창을 보여줌
        move.current.focus(); // focus 이동
    };

    const Stay = () => {
        setVisible(false);
        stay.current.focus();
    };

    const [id, setId] = useState();
    const [title, setTitle] = useState();
    const [content, setContent] = useState();

    /* 나중에 서버통신할 때 사용
    const [posts, setPosts] = useState([]); 

    const getPosts = () => {
        axios
        .get('서버주소') //axios를 통해 HTTP 요청을 보내는 코드
        .then( (response) => { //then()에서는 HTTP 요청을 통해 받아온 data를 처리할 수 있다
            setPosts(response.data); // 이전에 useState으로 생성했던 setPosts 함수를 통해 data를 posts에 저장
        })
    }

    useEffect(getPosts, []);
    */

    
    
    return(
        <Grid container spacing={6}>
            <Grid item xs={12} sm={6.6}>

                <Grid container spacing={1}>
                    <Grid item xs={12} sm={3}>
                        <Box
                            sx={{
                                width: '100%',
                                height: '84vh',
                                border: '1px solid skyblue'
                            }}
                            //ref={stay} -> 여기쓰면 적용안됨
                        >
                            <Button
                                ref={stay} // -> 여기써야 적용됨
                            >
                                profile
                            </Button>
                            profile
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <Box
                            sx={{
                                width: '100%',
                                height: '84vh',
                                border: '1px solid skyblue',
                                padding : '1%'
                            }}
                        >

                            <Grid container spacing={2}>
                                {/* 하위 component로 전달할 함수 매개변수로 주기 */}

                                {/*서버통신할 때 사용 
                                <ContentBox Move={Move} post={posts}></ContentBox>
                                */}

                                {/* map 함수를 사용해야 data가 1개씩 전달됨 & data수만큼 글 생성 */}
                                { list.map((list) => (
                                   <ContentBox Move={Move} setId={setId} setTitle={setTitle} setContent={setContent} key={list.id} {...list}></ContentBox>  
                                ))}
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            {
                visible 

                && 

                <Grid item xs={12} sm={5.4}>
                    <Box
                        sx={{
                            width: '100%',
                            height: '86vh',
                            border: '1px solid skyblue',
                            //margin: '3%'
                        }}
                        //ref={move}
                    >
                        <Button
                            style={{
                                float: 'right',
                                margin: '0.5%',
                                padding: 0
                            }}
                            ref={move} //이런 입력 , button component에만 적용됨
                            onClick ={Stay}
                        >
                            X
                        </Button>
                        <HiddenContentBox id={id} title={title} content={content}></HiddenContentBox>
                    </Box>
                </Grid>
            }
        </Grid>
    );

}

export default ContentGrid;