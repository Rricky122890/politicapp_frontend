import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

class NavBar extends Component{
  render(){


  console.log(this.props);
    return(
      <nav className="navbar navbar-expand-sm navbar-light">
  <ul class="navbar-nav">
    <li class="nav-item ">
      <NavLink className="nav-link white" to="/">{ this.props.user ? this.props.user.user.username: "Profile"}</NavLink>
    </li>
    <li class="nav-item">
      <NavLink className="nav-link" to="/legislators">Legislators</NavLink>
    </li>
    <li class="nav-item">
      <NavLink className="nav-link" to="/">Calendar</NavLink>
    </li>
    <li class="nav-item">
      <input className="nav-item" placeholder="Search Politician" onChange={this.props.filterLegislator} type="text"/>
    </li>
    <li>
     <NavLink class="nav-link" to="/login">Login</NavLink>
    </li>
  </ul>
</nav>
    )
  }
}

export default NavBar
