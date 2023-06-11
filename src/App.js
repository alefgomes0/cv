import React, { Component } from "react";
import { Form } from "./components/form";
import { DisplayInfo } from "./components/displayinfo"
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: true
    };
  }

  render() {
    return (
      <>
        {this.state.isEdit && <Form />}
        <DisplayInfo />
      </>
    );
  }
}

export default App;
