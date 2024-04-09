import { useCallback, useEffect, useRef, useState } from "react";

import './App.css';
import Header from '../header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import { Route, Routes } from 'react-router-dom';
import AppLayout from '../AppLayout/AppLayout';

function App() {

  const [isSideMenuOpen, setSideMenuStatus] = useState(false);

  function handleOpenSideMenu() {
    setSideMenuStatus(!isSideMenuOpen);
  }

  function handleCloseSideMenu() {
    setSideMenuStatus(false);
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<AppLayout onHamburgerClick={handleOpenSideMenu}/>}>
          <Route index element={<Main/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/movies' element={<Movies />}></Route> 
          <Route path='/saved-movies' element={<SavedMovies />}></Route>
        </Route>
        <Route path='/signup' element={<Register/>}></Route>
        <Route path='/signin' element={<Login/>}></Route>
        <Route path='/*' element={<NotFound/>}></Route>
      </Routes>
      <HamburgerMenu  isSideMenuOpen={isSideMenuOpen} onClose={handleCloseSideMenu} ></HamburgerMenu>
      {/* <Header></Header>
      <Main></Main>
      <Footer></Footer>
      <Movies></Movies>
      <Profile></Profile>
      <Register></Register>
      <Login></Login>
      <NotFound></NotFound>
      <HamburgerMenu></HamburgerMenu> */}
    </div>
  );
}

export default App;
