import logo from './logo.svg';
import './App.css';
import { SearchBar } from './components/SearchBar/SearchBar';
import { LoginForm } from './pages/Login/Login';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SearchBar />
  </div>
  );
}

export default App;
