import {Link} from 'react-router-dom'
import React, { useContext } from 'react';
import {useNavigate} from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate()
    function handleClickLogout () {
        //window.alert("click")
        
        localStorage.setItem('access', '');
        localStorage.setItem('user', '');
        navigate('/login')        
    }

  return (
    <div className="bg-primary grid md:grid-cols-10">
        
        <div className="md:col-span-9 ">
            <div className=" uppercase text-5xl justify-center item-center text-center">
                Movie Film 
            </div>
            <div className="grid md:grid-cols-3 justify-center items-center text-center text-xl">
                <div className="md:col-span-1 cursor-pointer py-2">
                    Home
                </div>
                <div className="md:col-span-1 cursor-pointer py-2">
                    Latest
                </div>
                <div className="md:col-span-1 cursor-pointer py-2">
                    Genre
                </div>
            </div>
        </div>
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
                    <div>
                        <div className='flex my-2 '> 
                            {
                                localStorage.getItem('user')
                            }
                        </div>
                        <button className="btn mr-2 " onClick={handleClickLogout}>
                            LogOut
                        </button>
                    </div>
                 )
                
            }
        </div>

        
    </div>
  )
}

export default NavBar