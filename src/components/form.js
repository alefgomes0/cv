import React, { Component } from "react";
import "./../App.css"
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
    const index = this.state.fieldsInfo.findIndex(
      (field) => field.name === fieldName
    );

    if (index === -1) {
      this.setState(
        {
          fieldsInfo: this.state.fieldsInfo.concat({
            id: nextId++,
            name: fieldName,
            value: event.target.value,
          }),
        },
        () => console.log(this.state.fieldsInfo)
      );
    } else {
      const updatedFieldsInfo = [...this.state.fieldsInfo];
      updatedFieldsInfo[index].value = event.target.value;
      this.setState(
        {
          fieldsInfo: updatedFieldsInfo,
        },
        () => console.log(this.state.fieldsInfo)
      );
    }
  }


  render() {
    return (
      <form onSubmit={this.handleOnSubmit} onChange={this.handleOnChange} className="idk">
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
