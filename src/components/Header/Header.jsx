import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const { user, logOut, setUser } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then((result) => {
      setUser(null);
    });
  };

  // console.log(user,details);
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div style={{display:'flex',alignItems:'center'}}>
        <Link to="/">Shop</Link>
        <Link to="/orders">Order</Link>
        <Link style={{marginRight:'10px'}} to="/inventory">Inventory</Link>
        {!user && <Link to="/login">Login</Link>}
        {!user && <Link to="/sign-up">SignUp</Link>}
        {user && <p style={{color:'white', marginRight:'10px'}}>{user.email}</p>}
        {user && <button style={{padding:'10px'}} onClick={handleLogOut}>Sign out</button>}
      </div>
    </nav>
  );
};

export default Header;
