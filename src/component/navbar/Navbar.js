import React from 'react';
import {Link} from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav className='navbar navbar-dark bg-dark'>
        <div className='container'>
          <Link to={"/"} className="navbar-brand text-white">React</Link>
          <form className="form-inline">
            {this.props.data.map((item, index) => {
              return (
                <Link key={index} to={item.link} className='nav-link text-white'>{item.text}</Link>
              )
            })}
          </form>
        </div>
      </nav>
    )
  }
}

export default Navbar;
