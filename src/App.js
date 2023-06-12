import React, { Component } from "react";
import { Form } from "./components/form";
import { DisplayInfo } from "./components/displayinfo"
import "./App.css";

// Queria conseguir passar esse state pro Form como prop
// e depois receber o "update" dele

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: true,
      formData: {}
    };

    this.handleFormInfo = this.handleFormInfo.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.readFormData = this.readFormData.bind(this)
  }

  handleFormInfo(userData) {
    console.log(userData)
  }

  handleButtonClick() {
    this.setState({
      isEdit: !this.state.isEdit
    })

    if (!this.state.isEdit) {
      // ...
    }
  }

  readFormData(userInfo) {
    this.setState({
      formData: userInfo
    }, () => console.log(this.state.formData))
  }

  render() {
    const { isEdit } = this.state
    return (
      <>
        {isEdit && <Form passData={this.readFormData} setClick={click => this.clickChild = click}/>}
        {!isEdit && <DisplayInfo />}
        <div className="buttonContainer">
          <button onClick={this.handleButtonClick}>
            {isEdit ? "Preview" : "Edit"}
          </button>
        </div>
        <button  onClick={() => this.clickChild()}>aaaaa</button>
      </>
    );
  }
}

export default App;
