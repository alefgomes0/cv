const { Component } = require("react");

export class GeneralInfo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className="general-info">
        <label>General Information</label>
        <div>
          <label>First Name</label>
          <input
            type="text"
            placeholder="John"
          >
          </input>
        </div>

        <div>
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Doe"
          >
          </input>
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="johndoe@email.com"
          >
          </input>
        </div>

        <div>
          <label>Phone Number</label>
          <input
            type="number"
          >
          </input>
        </div>
        <hr />
      </section>
    );
  }
}