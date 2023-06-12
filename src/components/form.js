import React, { Component } from "react";
import "./../App.css";
import { Field } from "./field";

let nextId = 0;

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fieldsInfo: [],
      fieldsTags: this.props.pica
    };

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.getAlert = this.getAlert.bind(this);
  }

  componentDidMount() {
    this.props.setClick(this.getAlert);
 }
 
 getAlert() {
    this.props.passData(this.state.fieldsTags)
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
          fieldsTags: {
            ...this.state.fieldsTags,
            [fieldName]: event.target.value
          }
        }, () => console.log(this.state.fieldsInfo, this.state.fieldsTags))
        
      
    } else {
      const updatedFieldsInfo = [...this.state.fieldsInfo];
      updatedFieldsInfo[index][fieldName] = event.target.value;


      this.setState(
        {
          fieldsInfo: updatedFieldsInfo,
          fieldsTags: {
            ...this.state.fieldsTags,
            [fieldName]: event.target.value
          }
        },
        () => console.log(this.state.fieldsInfo, this.state.fieldsTags)
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

        <button type="submit">Save</button>
      </form>
    );
  }
}
