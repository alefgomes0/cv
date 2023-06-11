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

    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleButtonClick() {
    this.setState({
      isEdit: !this.state.isEdit
    })
  }


  render() {
    const { isEdit } = this.state
    return (
      <>
        {isEdit && <Form />}
        {!isEdit && <DisplayInfo />}
        <button onClick={this.handleButtonClick}>
          {isEdit ? "Preview" : "Edit"}
        </button>
      </>
    );
  }
}

export default App;
