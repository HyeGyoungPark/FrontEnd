import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
/*import LoginPage from './component/page/login_page/LoginPage';*/
import LoginPage from '../src/component/page/LoginPage';
//import MainPage from '../src/component/page/MainPage';
//import SignUpPage from '../src/component/page/SignUpPage';
import React from 'react';
import SingUpPage from './component/page/SignUpPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SingUpPage />} />
        {/*<Route element={<MainPage />} />
        <Route element={<SignUpPage />} />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
