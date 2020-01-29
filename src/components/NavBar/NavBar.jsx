import React, { Component } from "react";
import {AppBar, Menu, Toolbar, IconButton, Typography} from '@material-ui/core';
import { Link } from "gatsby";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <div className="nav">
            <Typography variant="h6">
              <Link to="/">Home</Link>
            </Typography>
            <Typography variant="h6">
              <Link to="/blog">Blog</Link>
            </Typography>
            <Typography variant="h6">
              <Link to="/blog">Podcast</Link>
            </Typography>
            <Typography variant="h6">
              <Link to="/blog">Contact</Link>
            </Typography>
          </div>
        </Toolbar>

      </AppBar>
    );
  }
}

export default NavBar;
