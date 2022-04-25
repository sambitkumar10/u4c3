import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";



export const Navbar = () => {
  const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully
 
  return (
    <>
      <nav>
        <div>
          <Link to="/home">Home</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/books">Books</Link>
        </div>
        <div>
          <Link to="/login">Login</Link>
        </div>
        {/* keep all the NavLinks here */}
        
      </nav>
    </>
  );
};
