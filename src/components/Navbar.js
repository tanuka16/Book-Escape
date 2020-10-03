import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo1 from '../logo1.png'

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark px-sm-5">

      <Link to="/">
        <img src={logo1} alt='store' className='navbar-brand' />
      </Link>
        <ul></ul>
      </nav>
    );
  }

}

export default Navbar;
