import React from 'react';
import {Link} from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        {this.props.data.map((item, index) =>{
          return(
             <Link key={index} to={item.link}> {item.text} |</Link>
          )
        })}
      </nav>
    )
  }
}
export default Navbar;
