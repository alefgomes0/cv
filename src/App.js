import React, { Component } from "react";
import { Form } from "./components/form";
import { DisplayInfo } from "./components/displayinfo"
import "./App.css";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: true,
      formData: {},
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.readFormData = this.readFormData.bind(this)
  }


  handleButtonClick() {
    this.setState({
      isEdit: !this.state.isEdit
    }, () => console.log(this.state.formData))
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
        {isEdit && <Form passData={this.readFormData} changeEdit={this.handleButtonClick}/>}
        {!isEdit && <DisplayInfo formInfo={this.state.formData}/>}
        <div className="button-container">
          {!isEdit && <button onClick={this.handleButtonClick}>Edit</button>}
        </div>
      </>
    );
  }
}

export default App;
