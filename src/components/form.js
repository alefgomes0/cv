import React, { Component } from "react";
import "./../App.css";
import { Field } from "./field";


export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fieldsTags: {},
      isEditMode: false // New state property
    };

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.changeEdit = this.changeEdit.bind(this)
  }


  handleOnSubmit(event) {
    event.preventDefault();
    this.props.passData(this.state.fieldsTags);
    this.props.saveForm();
  }

  handleOnChange(event) {
    const fieldName = event.target.dataset.name;

    this.setState({
      fieldsTags: {
        ...this.state.fieldsTags,
        [fieldName]: event.target.value
      }
    })
  }

  changeEdit() {
    this.props.changeEdit();
    this.props.passData(this.state.fieldsTags);
  }


  render() {
      const { isEdit, isSubmit } = this.props
      const formClassName = `${isEdit ? "" : "hide"} ${isSubmit ? "hide" : ""}`;

    return (
      <form
        onSubmit={this.handleOnSubmit}
        onChange={this.handleOnChange}
        className={formClassName}
      >
        <section className="general-info">
          <header>General Information</header>
          <br />
          <div className="user-name">
            <Field name={"First Name"} placeholder={"John"} />
            <Field name={"Last Name"} placeholder={"Doe"} />
          </div>
          <div className="user-personal-info">
            <Field name={"Email"} type={"email"} />
            <Field name={"Phone Number"} type={"number"} />
          </div>      
        </section>
        <hr />

        <section className="professional-exp">
          <header>Professional Experience</header>
          <br />
          <div className="user-prof-info">
            <Field name={"Company Name"} />
            <Field name={"Job Title"} />
          </div>      
          <div className="from-until">
            <Field name={"From: "} type={"date"} />
            <Field name={"Until: "} type={"date"} />
          </div>
          <div className="main-tasks">
            <Field name={"Main Tasks "} />
          </div>
        </section>
        <hr />

        <section className="education">
          <header>Education</header>
          <br />
          <div className="user-educ-info">
            <Field name={"Degree"} />
            <Field name={"Institution"} />
          </div>      
          <div className="from-to">
            <Field name={"Start Date"} type={"date"} />
            <Field name={"End Date"} type={"date"} />
          </div>
        </section>

        <div className="form-buttons">
          {isEdit && <button onClick={this.changeEdit}>Preview</button>}
          <button type="submit">Save</button>
        </div>
      </form>
    );
  }
}
