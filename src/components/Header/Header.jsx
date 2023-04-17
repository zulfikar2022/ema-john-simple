import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {
    const {user,logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut();
        console.log('clicked from out');
    }
   
    // console.log(user,details);
    return (
        <nav className='header' >
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Order</Link>
                <Link to="/inventory">Inventory</Link>
              { !user &&  <Link to="/login">Login</Link>}
                {!user && <Link to="/sign-up">SignUp</Link>}
                {user && <button onClick={handleLogOut}>Sign out</button>}
            </div>
        </nav>
    );
};

export default Header;