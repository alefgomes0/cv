import React, { Component } from "react";
import "./../App.css";
import { Field } from "./field";

let nextId = 0;

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fieldsInfo: [],
    };

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnSubmit(event) {
    event.preventDefault();
  }

  handleOnChange(event) {
    const fieldName = event.target.dataset.name;
    const fieldTitle = event.target.dataset.title;
    const index = this.state.fieldsInfo.findIndex(
      (field) => field.title === fieldTitle
    );

    if (index === -1) {
      this.setState(
        {
          fieldsInfo: this.state.fieldsInfo.concat({
            id: nextId++,
            [fieldName]: event.target.value,
            title: fieldTitle,
          }),
        },
        () => console.log(this.state.fieldsInfo, this.state.fieldsInfo[1])
      );
    } else {
      const updatedFieldsInfo = [...this.state.fieldsInfo];
      updatedFieldsInfo[index][fieldName] = event.target.value;
      this.setState(
        {
          fieldsInfo: updatedFieldsInfo,
        },
        () => console.log(this.state.fieldsInfo, index)
      );
    }
  }

  render() {
    return (
      <form
        onSubmit={this.handleOnSubmit}
        onChange={this.handleOnChange}
      >
        <section className="general-info">
          <header>General Information</header>
          <br />
          <Field name={"First Name"} placeholder={"John"} />
          <Field name={"Last Name"} placeholder={"Doe"} />
          <Field name={"Email"} type={"email"} />
          <Field name={"Phone Number"} type={"number"} />
        </section>
        <hr />

        <section className="professional-exp">
          <header>Professional Experience</header>
          <br />
          <Field name={"Company Name"} />
          <Field name={"Job Title"} />
          <Field name={"From: "} type={"date"} />
          <Field name={"Until: "} type={"date"} />
          <Field name={"Main Tasks "} />
        </section>
        <hr />

        <section className="education">
          <header>Education</header>
          <br />
          <Field name={"Degree"} />
          <Field name={"Institution"} />
          <Field name={"Start Date"} type={"date"} />
          <Field name={"End Date"} type={"date"} />
        </section>

        <button type="submit">Preview</button>
      </form>
    );
  }
}
