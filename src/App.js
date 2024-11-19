import React from 'react';
import LoginPage from './screens/Login/Login';
import SignPage from './screens/Sign/Sign';
import IdeasPage from './screens/Ideas/Ideas';
import { ProfilePage } from './screens/Profile/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/banco-de-ideias-cetificadora-3/" index element={<SignPage/>}/>
        <Route path="/banco-de-ideias-cetificadora-3/LoginPage" element={<LoginPage/>}/>
        <Route path="/banco-de-ideias-cetificadora-3/IdeasPage" element={<IdeasPage/>}/>
        <Route path="/banco-de-ideias-cetificadora-3/ProfilePage" element={<ProfilePage/>}/>
        <Route path="*" element={<SignPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App