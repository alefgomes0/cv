import { Component } from "react";

export class Field extends Component {
  constructor(props) {
    super(props);
    this.adjustName = this.adjustName.bind(this);
  }

  adjustName(someName) {
    let adjustedName = "";
    let index = 0;
    for (let s of someName) {
      if (s === " " || s === ":") continue;
      if (index === 0) {
        adjustedName += s.toLowerCase();
        index++;
        continue;
      }

      adjustedName += s;
    }

    return adjustedName;
  }

  render() {
    const { name, type = "text", placeholder = "" } = this.props;
    return (
      <div className="field">
        <label>{name}</label>
        <input
          type={type}
          placeholder={placeholder}
          data-name={this.adjustName(name)}
        ></input>
      </div>
    );
  }
}
