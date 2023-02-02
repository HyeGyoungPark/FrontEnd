import React, {useState} from 'react';
import GalleryList from './GalleryList';
import GalleryView from './GalleryView';
import data from './images';
import { useNavigate } from 'react-router-dom';
import './GalleryCss.css'


function Gallery(){
    const navigate = useNavigate();

    const [datas, setDatas] = useState(data);       //사진 데이터
    const [currItem,setCurrItem] = useState(datas[0]);  //선택한 사진 상태 설정

    const onView = (id) => {            //고유번호 id를 받아서 사진 찾기
        setCurrItem(datas.find(item => item.id == id))  //배열함수중 해당 값만 찾아줌
    }

    return(
        <div className='wrap'>
            <GalleryList  datas = {datas} onView = {onView} currItem = {currItem}/>
            <GalleryView currItem = {currItem}/>
        </div>
    )
}

export default Gallery;