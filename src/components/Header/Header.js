import React from "react";
import post from "../../post.png";
import "./Header.css";
import { AppBar, Toolbar } from "@material-ui/core";

const Header = () => {
  return (
    <div className='header'>
      <img src={post} alt='' />
      <AppBar
        position='static'
        style={{ background: "#1b5e20", alignItems: "center" }}
      >
        <Toolbar>
          <a href='/home'> Home </a>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
