import React, { Component } from "react";
import { Form } from "./components/form";
import "./App.css";

import { Field } from './components/field'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cv: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // setState é async. passar o console.log como cb garante
  // que o log n vai ser executado antes do setState
  handleClick() {
    this.setState(
      {
        cv: this.state.cv.concat({ id: 1, name: "pica", value: 11 }),
      },
      () => {
        console.log(this.state);
      }
    );
  }

  render() {
    return (
      <>
        <Form />
        <button onClick={this.handleClick}>idk</button>
        <Field name={"aaaaaaa"} />
      </>
    );
  }
}

export default App;
