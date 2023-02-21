import React, {useEffect, useState} from 'react';
import { useMediaQuery } from 'react-responsive';
import MainPageContent from '../ui/main/MainPageContent';
import {Link} from "react-router-dom";
import axios from "axios";
import '../ui/main/MainPageContent.css';

function MainPage(props) {

    const isFull = useMediaQuery({
        query : "(min-width:1440px)"
    });

    const isLarge = useMediaQuery({
        query : "(min-width:1250px) and (max-width:1439px)"
    });

    const isLargeMedium = useMediaQuery({
        query : "(min-width:850px) and (max-width:1249px)"
    });

    const isMedium = useMediaQuery({
        query : "(min-width:650px) and (max-width:849px)"
    });

    const isSmall = useMediaQuery({
        query : "(max-width:649px)"
    });

    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8080/api/posts/list")
            .then(res => {
                setData(res.data);
            })
    }, []);

    if (data) {
        let urlList = [];
        for (let i=0; i<data.length ; i++) {
            urlList.push('/posts/'+data[i].id);
        }

        const postList = urlList.map((u, index) =>
            <Link to={u} >[제목]{data[index].title}</Link> );

        return (
            <div className='box'>
                <>
                    {postList}
                </>
                {isFull && <MainPageContent style={{marginTop: '0.2%'}}> </MainPageContent>}
                {isLarge && <MainPageContent style={{marginTop: '0.5%'}}></MainPageContent>}
                {isLargeMedium && <MainPageContent style={{marginTop: '1%'}}></MainPageContent>}
                {isMedium && <MainPageContent style={{marginTop: '1/5%'}}></MainPageContent>}
                {isSmall && <MainPageContent style={{marginTop: '2%'}}></MainPageContent>}
            </div>
        );
    } else {
        return (
            <div className='box'>
                {isFull && <MainPageContent style={{marginTop: '0.2%'}}> </MainPageContent>}
                {isLarge && <MainPageContent style={{marginTop: '0.5%'}}></MainPageContent>}
                {isLargeMedium && <MainPageContent style={{marginTop: '1%'}}></MainPageContent>}
                {isMedium && <MainPageContent style={{marginTop: '1.5%'}}></MainPageContent>}
                {isSmall && <MainPageContent style={{marginTop: '2%'}}></MainPageContent>}
            </div>
        );
    }

}

export default MainPage;