import { Component } from "react";

export class ProfessionalExp extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className="professional-exp">
        <label>Professional Experience</label>

        <div>
          <label>Company Name</label>
          <input 
            type="text"
          >
          </input>
        </div>

        <div>
          <label>Job Title</label>
          <input 
            type="text"
          >
          </input>
        </div>

        <div>
          <label>From: </label>
          <input 
            type="date"
          >
          </input>
        </div>

        <div>
          <label>Until: </label>
          <input 
            type="date"
          >
          </input>
        </div>

        <div>
          <label>Main Tasks</label>
          <textarea></textarea>
        </div>
        <hr />
      </section>
    )
  }
}