import React, { Component } from "react";
import { Field } from "./field"


let nextId = 0;

export class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fieldsInfo: []
    }

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  } 

  handleOnSubmit(event) {
    event.preventDefault();

  }


  handleOnChange(event) {
    const fieldName = event.target.dataset.name;



    this.setState({
      

      fieldsInfo: this.state.fieldsInfo.concat(
        {name: fieldName, value: event.target.value, id: nextId++}
      )
    }, () => console.log(this.state.fieldsInfo )) 

  }


  render() {
    return (
      <form onSubmit={this.handleOnSubmit} onChange={this.handleOnChange}>
        <section className="general-info">
          <label>General Information</label>
          <br />
          <Field 
            name={"First Name"}
            placeholder={"John"}
          />
          <Field 
            name={"Last Name"}
            placeholder={"Doe"}
          />
          <Field 
            name={"Email"}
            type={"email"}
          />
          <Field 
            name={"Phone Number"}
            type={"number"}
          />
        </section>
        <hr />

        <section className="professional-exp">
          <label>Professional Experience</label>
          <br />
          <Field 
            name={"Company Name"}
          />
          <Field 
            name={"Job Title"}
          />
          <Field 
            name={"From: "}
            type={"date"}
          />
          <Field 
            name={"Until: "}
            type={"date"}
          />
          <Field 
            name={"Main Tasks "}
          />
        </section>
        <hr />

        <section className="education">
          <label>Education</label>
          <br />
          <Field 
            name={"Degree"}
          />
          <Field 
            name={"Institution"}
          />
          <Field 
            name={"Start Date"}
            type={"date"}
          />
          <Field 
            name={"End Date"}
            type={"date"}
          />
        </section>

        <button type="submit">Preview</button>
      </form>
    )
  }
}