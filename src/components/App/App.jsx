import './App.css';
import Header from '../header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/movies' element={<Movies />}></Route>
        <Route path='/savied-movies' element={<Movies />}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/signup' element={<Register/>}></Route>
        <Route path='/signin' element={<Login/>}></Route>
      </Routes>
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
