import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Demo , LoginForm} from './login/tailwind_login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { SearchBar } from './search_bar';
import { Login } from './login.jsx';
import { Header } from './header/header';
import { HomePage } from './page/HomePage.jsx';
import { LoginPage } from './page/LoginPage.jsx';
import {Routes} from 'react-router-dom'
import FilmList from './components/FilmList/FilmList';
import VideoPlayer from './components/VideoPlay/videoplay';
import VideoPlayPage from './page/VideoPlayPage';

function App() {
  return (
    <div className="App">
      {/* <p>Hello</p> */}
      <div class="bg-auto md:bg-contain">
        {/* <HomePage></HomePage> */}
        <Routes>
          <Route path="/home" element={<HomePage></HomePage>}>
            {/* <Route path='/:FilmId' element={<FilmList></FilmList>}>
            </Route> */}
          </Route>
          <Route path="/login" element={<LoginPage></LoginPage>}>
          </Route>
          <Route path="/film" element={<VideoPlayPage></VideoPlayPage>}>
          </Route>
        </Routes>  
      </div>
        
      
      
      
      
    </div>
  );
}

export default App;
