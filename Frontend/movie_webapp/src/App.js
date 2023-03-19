import logo from './logo.svg';
import './App.css';

import { SearchBar } from './search_bar';
import { Login } from './login.jsx';

function App() {
  return (
    <div className="App">
      <div class="bg-auto md:bg-contain">
        
      </div>
      <SearchBar>
        SearchBar
      </SearchBar>

      <Login>Hello</Login>
      
    </div>
  );
}

export default App;
