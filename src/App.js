import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [{ name: "xuanyu", age: "35" }, { name: "yiran", age: "27" }],
      toshow: true
    };
  }

  // switchnamehandler = (idx) => {
  //   const dup = this.state.persons.slice()
  //   dup[idx].name = dup[idx].name + '-'

  //   this.setState({persons:dup})
  // }

  onnamechange = (event, idx) => {
    console.log(event.target.value);
    const dup = this.state.persons.slice();
    dup[idx].name = event.target.value;

    this.setState({ persons: dup });
  };

  togglehide = () => {
    this.setState({ toshow: !this.state.toshow });
  };

  render = () => {
    const action = this.state.toshow ? "Hide all" : "Show all";
    let content = null;
    if (this.state.toshow)
      content = this.state.persons.map((el, idx) => (
        <Person
          name={el.name}
          age={el.age}
          onnamechange={event => this.onnamechange(event, idx)}
        />
      ));

    return (
      <div className="App">
        <h3>Hi, I'm a React app</h3>
        <button onClick={this.togglehide}>{action}</button>
        {content}
      </div>
    );
  };
}

export default App;
