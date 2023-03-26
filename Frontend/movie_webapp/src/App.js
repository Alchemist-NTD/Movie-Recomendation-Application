import logo from './logo.svg';
import './App.css';
import { Demo , LoginForm} from './login/tailwind_login';

import { SearchBar } from './search_bar';
import { Login } from './login.jsx';
import { Header } from './header/header';

function App() {
  return (
    <div className="App">
      <div class="bg-auto md:bg-contain">
        
      </div>
      <SearchBar>
        SearchBar
      </SearchBar>
      <Header></Header>
      <LoginForm></LoginForm>
      <Login>Hello</Login>
      
    </div>
  );
}

export default App;
