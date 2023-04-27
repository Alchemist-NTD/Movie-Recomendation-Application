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

function App() {
  return (
    <div className="App">
      <div class="bg-auto md:bg-contain">
        
        <Routes>
          <Route path="/home" element={<HomePage></HomePage>}>
          </Route>
          <Route path="/login" element={<LoginPage></LoginPage>}>
          </Route>
        </Routes>  
      </div>
        
      
      
      
      
    </div>
  );
}

export default App;
