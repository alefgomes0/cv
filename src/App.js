import React, { Component } from "react";
import { Form } from "./components/form";
import { DisplayInfo } from "./components/displayinfo";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: true,
      isSubmitted: false,
      formData: {},
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.readFormData = this.readFormData.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handlePrint = this.handlePrint.bind(this);
  }

  handleButtonClick() {
    this.setState({
      isEdit: !this.state.isEdit,
    });
  }

  readFormData(userInfo) {
    this.setState({
      formData: userInfo,
    });
  }

  handleFormSubmit() {
    this.setState({
      isSubmitted: true,
    });
  }

  handlePrint() {
    window.print();
  }

  render() {
    const { isEdit, isSubmitted } = this.state;
    return (
      <>
        {
          <Form
            passData={this.readFormData}
            changeEdit={this.handleButtonClick}
            isEdit={isEdit}
            saveForm={this.handleFormSubmit}
            isSubmit={isSubmitted}
          />
        }
        {(!isEdit || isSubmitted) && (
          <DisplayInfo formInfo={this.state.formData} />
        )}
        <div className="button-container">
          {!isEdit && <button onClick={this.handleButtonClick}>Edit</button>}
          {isSubmitted && (
            <button onClick={this.handlePrint} className="print-button">
              Print
            </button>
          )}
        </div>
      </>
    );
  }
}

export default App;
