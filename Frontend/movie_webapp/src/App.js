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
import { MyComponentSearchBar } from './page/home_page';
import WatchingFilm from './components/WatchingFilm/WatchingFilm';
import FilmPage from './page/FilmPage';
import NotFound from './page/NotFound';

function App() {
  return (
    <div className="App">
      {/* <p>Hello</p> */}
      <div className="bg-auto md:bg-contain">
        {/* <HomePage></HomePage> */}
        <Routes>
        <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='home/:id' element={<FilmPage />} />
          {/* <Route exact path="/home" element={<HomePage />}>
            <Route path=':filmId' element={<WatchingFilm />} />
          </Route> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>  
      </div>
        
      
      
      
      
    </div>
  );
}

export default App;
