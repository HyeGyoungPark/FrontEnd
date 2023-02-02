import React, {useState, useEffect} from 'react';
import { Drawer, Box, List, ListItem, ListItemIcon, ListItemButton, 
    ListItemText, InputBase, Collapse, Button, Typography } from '@mui/material';
import {SearchRounded, ExpandLess, ExpandMore, Group, Settings, Edit} from '@mui/icons-material';
import {styled} from '@mui/system';
import {useNavigate} from "react-router-dom";
import data from "../../data.json";

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
    maxHeight: "57vh",
    "&::-webkit-scrollbar" :{
        width: 0,
    }
})

const StateCircle = styled('div')({
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#757ce8',
});

const ImageCircle = styled('div')({
    width: '35px',
    height: '35px',
    borderRadius: '50%',
    border: '1px solid #8c8c8c',
    marginRight: '20px',
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

    const [keyword, setKeyword] = useState("");
    console.log(keyword);
    const navigate = useNavigate();
    const [nestedOpen, setNestedOpen] = useState(false);
    const [mousePositionX, setMousePositionX] = useState();

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePositionX(e.clientX);
            const clientX = mousePositionX;
            if(clientX >= 0 && clientX <= 10){
                setToggle(true);
            }
            else if(clientX > 250){
                setToggle(false);
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
                PaperProps={{
                    sx: {
                        width: '250px',
                    }
                }}
            >
                <List>
                    <ListItem key='home' onClick={() => navigate("..")} sx={{cursor: 'pointer'}}>
                        <Typography variant="h4" sx={{margin: '10px 10px'}}>Bstar</Typography>
                    </ListItem>
                    <Search key='search' sx={{margin: '10px'}}>
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
                                    <ListItem key={item} sx={{padding: '0 5px'}}>
                                        <ListItemButton href={'/friend'}>
                                            <ListItemIcon>
                                                <Group style={{ color: 'skyblue' }}/>
                                            </ListItemIcon>
                                            <ListItemText primary={<Typography style={{fontWeight:'bold'}}>{texts[index]}</Typography>}/> 
                                        </ListItemButton>
                                        <Button onClick={handleClick}>
                                                {nestedOpen? <ExpandLess /> : <ExpandMore />}
                                        </Button>
                                    </ListItem>
                                    <NestedBox in={nestedOpen} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            {data.map((friend, index) => {
                                                return(
                                                    <ListItem key={friend.id} sx={{ padding: '0 15px 0 25px'}}>
                                                        <ListItemButton href={'/' + friend.blogName}>
                                                            <ImageCircle/>
                                                            <ListItemText primary={friend.nickName} sx={{margin: '0 10px'}}/>
                                                            {friend.newState && <StateCircle/>}
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
                                <ListItem key={item} sx={{padding: '0 5px'}}>
                                    <ListItemButton href={'/' + item}>
                                        <ListItemIcon>{item === "setting"? <Settings style={{ color: 'skyblue' }} /> : <Edit style={{ color: 'skyblue' }} />}                                     
                                        </ListItemIcon>
                                        <ListItemText primary={<Typography style={{fontWeight:'bold'}}>{texts[index]}</Typography>}/>
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