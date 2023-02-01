import React, {useRef, useState, useEffect} from 'react';
import { Drawer, Box, List, ListItem, ListItemIcon, ListItemButton, 
    ListItemText, IconButton, Divider, InputBase, Collapse, Button } from '@mui/material';
import {Inbox, ChevronLeft, SearchRounded, ExpandLess, ExpandMore, InsertEmoticon} from '@mui/icons-material';
import {styled} from '@mui/system';
import {useNavigate} from "react-router-dom";

const DrawerHandler = styled('div')({
    textAlign: 'right',
    padding: '10px',
});

const Search = styled(ListItem)({
    border: '1px solid #8c8c8c',
    width: '90%',
    borderRadius: '20px',
    marginLeft: '15px',
});

const SearchIconWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const SearchInput = styled(InputBase)({
    display: 'inline-block',
    marginLeft: '10px',
    fontSize: '17px',
});

const NestedBox = styled(Collapse)({
    overflowY : "auto",
    maxHeight: "380px",
    "&::-webkit-scrollbar" :{
        width: 0,
    }
})

const Circle = styled('div')({
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: 'rgb(163, 151, 198)',
});

function Sidebar(props){
    const items = [
        'write',
        'friends', 
        'setting',
    ];

    const texts = [
        '글쓰기',
        '이웃',
        '설정',
    ]

    const friends = [
        '씅1',
        'soso1',
        '경혜은1',
        'ㄱㅎ1',
        'kiwi1',
        '맘모스1',
        '씅2',
        'soso2',
        '경혜은2',
        'ㄱㅎ2',
        'kiwi2',
        '맘모스2',
        '씅3',
        'soso3',
        '경혜은3',
        'ㄱㅎ3',
        'kiwi3',
        '맘모스3',
    ]

    const friendsID = [
        'a',
        'aa',
        'aaa',
        'aaaa',
        'aaaaa',
        'aaaaaa',
        'aaaaaaa',
        'aaaaaaaa',
        'aaaaaaaaa',
        'aaaaaaaaaa',
        'aaaaaaaaaa11',
        'aaaaaaaaaa12',
        'aaaaaaaaaa13',
        'aaaaaaaaaa14',
        'aaaaaaaaaa15',
        'aaaaaaaaaa16',
        'aaaaaaaaaa17',
        'aaaaaaaaaa18',
    ]

    const newState = [
        true,
        true,
        true,
        false,
        false,
        true,
        true,
        true,
        true,
        false,
        false,
        true,
        true,
        true,
        true,
        false,
        false,
        true,
    ]

    const [keyword, setKeyword] = useState("");
    console.log(keyword);
    const navigate = useNavigate();
    const [nestedOpen, setNestedOpen] = useState(false);
    const [mousePositionX, setMousePositionX] = useState();

    //mouse pointer 위치 받아와서 변경되면 handleMouseMove 실행
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePositionX(e.clientX);
            const clientX = mousePositionX;
            if(clientX >= 0 && clientX <= 10){
                slideRight();
            }
            else if(clientX > 310){
                slideLeft();
            }
        };
        window.addEventListener('mousemove', handleMouseMove);
        
    })

    const [toggle, setToggle] = useState(false);

    const onChange = (e) => {
        setKeyword(e.target.value);
    }

    const handleClick = () => {
        setNestedOpen(!nestedOpen);
    } 

    const slideRight = () => {
        console.log('right');
        setToggle(true);
    }

    const slideLeft = () => {
        console.log('left');
        setToggle(false);
    }

    
    return (
        <Box 
            sx={{ 
                display: 'flex',
                alignItems: 'center',
            }}          
        >
            <Drawer 
                anchor="left" 
                open={toggle}
                style={{width: '280px'}}
            >
                <List>
                    <Search key='search'>
                        <SearchIconWrapper>
                            <SearchRounded />
                        </SearchIconWrapper>
                        <SearchInput 
                            label=""
                            onChange={onChange}
                            onKeyUp={(e) => {
                                if(e.keyCode === 13)
                                    navigate('/search');
                            }}
                        />
                    </Search>
                    {items.map((item, index) => {
                        if(item === 'friends'){
                             return(
                                <>
                                    <ListItem key={item}>
                                        <ListItemButton href={'/friend'}>
                                            <ListItemIcon>
                                                <Inbox />
                                            </ListItemIcon>
                                            <ListItemText primary={texts[index]}/> 
                                        </ListItemButton>
                                        <Button onClick={handleClick}>
                                                {nestedOpen? <ExpandLess /> : <ExpandMore />}
                                        </Button>
                                    </ListItem>
                                    <NestedBox in={nestedOpen} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            {friends.map((friend, index) => {
                                                return(
                                                    <ListItem key={friend} sx={{ pl: 5 }}>
                                                        <ListItemButton href={'/' + friendsID[index]}>
                                                            <ListItemIcon>
                                                                <InsertEmoticon />
                                                            </ListItemIcon>
                                                            <ListItemText primary={friends[index]}/>
                                                            {newState[index] && <Circle /> }
                                                        </ListItemButton>
                                                    </ListItem>
                                                );  
                                            })}
                                        </List>
                                    </NestedBox>
                                </>
                             );
                        }
                        else{
                            return(
                                <ListItem key={item}>
                                    <ListItemButton href={'/' + item}>
                                        <ListItemIcon>
                                            <Inbox />
                                        </ListItemIcon>
                                        <ListItemText primary={texts[index]}/>
                                    </ListItemButton>
                                </ListItem>
                            );
                        }
                    })}
                    
                </List>
            </Drawer>
        </Box>
    );
}

export default Sidebar;