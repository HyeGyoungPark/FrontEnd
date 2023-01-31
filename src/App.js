import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import LoginPage from '../src/component/page/LoginPage';
import FindIDPage from '../src/component/page/FindIDPage'
import FindPWPage from '../src/component/page/FindPWPage';
import ResetPWPage from '../src/component/page/ResetPWPage';
import WritePage from './component/page/WritePage';
import MainPage from './component/page/MainPage';
import SearchPage from './component/page/SearchPage';
import SettingPage from './component/page/SettingPage';
import FriendPage from './component/page/FriendPage';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="findID" element={<FindIDPage />}/>
        <Route path="findPW" element={<FindPWPage />}/>
        <Route path="resetPW" element={<ResetPWPage />}/>
        <Route path="search" element={<SearchPage />}/>
        <Route path="write" element={<WritePage />}/>
        <Route path="setting" element={<SettingPage />}/>
        <Route path="friend" element={<FriendPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
