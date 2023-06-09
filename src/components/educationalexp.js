const { Component } = require("react");

export class EducationalExp extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className="educational-exp">
        <label>Educational Experience</label>

        <div>
          <label>Degree</label>
          <input
            type="text"
          >
          </input>
        </div>

        <div>
          <label>Institution</label>
          <input
            type="text"
          >
          </input>
        </div>

        <div>
          <label>Start Date</label>
          <input
            type="date"
          >
          </input>
        </div>

        <div>
          <label>End Date</label>
          <input
            type="date"
          >
          </input>
        </div>
        <hr />
      </section>
    )
  }
}