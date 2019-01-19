import React from 'react';
import {Link} from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="blue">
        <div className="nav-wrapper container">
          <Link to="/" className="brand-logo">Home</Link>
          <ul id="nav-mobile" className="right">
            {this.props.data.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.link}>{item.text}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;
