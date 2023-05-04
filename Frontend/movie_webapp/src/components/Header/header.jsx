import React from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'

function Header() {
    const navigate = useNavigate();
    function handleClickLogout () {
        //window.alert("click")
        
        localStorage.setItem('access', '');
        localStorage.setItem('user', '');
        navigate('/login')        
    }
  return (
    <header className="bg-gray-900 text-white py-4 px-6">
      <nav className="flex justify-between items-center">
        <Link to="/home" className="text-2xl font-bold">
          My Movie Web
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/home" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/movies" className="hover:text-gray-400">
              Movies
            </Link>
          </li>
          <li>
            <Link to="/tv-shows" className="hover:text-gray-400">
              TV Shows
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-400">
              Contact
            </Link>
          </li>
          <li>
          <div className="flex justify-center md:justify-end">
            {

                localStorage.getItem('access') == ""? (
                    <>
                        <Link to="/login">
                            <button className="btn mr-2">Login</button>
                        </Link>
                        <Link to="/login">
                            <button className="btn mr-2">Register</button>
                        </Link>
                    </>
                ) :
                 (
                    <>
                        <div> 
                            {
                                localStorage.getItem('user')
                            }
                        </div>
                        <div></div>
                        <button onClick={handleClickLogout}>
                            LogOut
                        </button>
                    </>
                 )
                
            }
        </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
