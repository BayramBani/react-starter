import React from 'react';
import DemoSideNav from "./components/DemoSideNav";
import './../../style/main.css'
import Hello from "./components/Hello";
import Clock from "./components/Clock";
import TodoApp from "./components/Todo";

class Demo extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col m2 s12">
            <DemoSideNav/>
          </div>
          <div className="col m10 s12 bb-border">
            <Hello text="React"/>
            <hr/>
            <Clock/>
            <hr/>
            <TodoApp/>
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;
