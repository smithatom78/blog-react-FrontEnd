import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Header.css';

function Header(props) {

    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [token, setToken] = useState('')
    let _email = localStorage.getItem('email');
    useEffect(() => {
      if(_email)
        setEmail(_email)
        let token = localStorage.getItem('token');
        setToken(token)
    }, [_email])
 

    function logout()
    {
        alert("Thank you");
     //    isLoggedIn = false;
      //   if (localStorage.getItem()) { 
            //check something in local storage so you can know
            // if you should reload or not 
          localStorage.clear();
          window.location.reload();
       
            navigate("/", { replace: true });
     }

    
    return (
        <div>
            <nav className="header">
                <h2 className="logo">Smitha Jacob's Blog Application</h2> {/* JSX*/}
                <h5> {email}</h5>
                <div className="articles">
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/about">About</Link>
                    {!email && <Link className="link" to="/signup">Sign up</Link>}
                   {!email && <Link className="link" to="/login">Login</Link>}
                  {email && <Link className="link" to="/article-list">Articles</Link>}
                  {email==="admin@test.com" && <Link className="link" to="/addart">Add Articles</Link>}
                   {email && <Link className="link" onClick={logout} to="/">Logout</Link>}
                </div>
            </nav>
        </div>
    );
}

export default Header;