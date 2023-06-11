import { Component } from "react";

export class Field extends Component {
  constructor(props) {
    super(props);



  // this.adjustName = this.adjustName.bind(this)

  }

/*   handleOnChange(event) {
    this.setState(
      (prevState) => ({
        fieldInfo: {
          ...prevState.fieldInfo,
          value: event.target.value,
        },
      }),
    );
  } */

/*   adjustName(someName) {
    let adjustedName = "";
    let index = 0;
    for (let s of someName) {
      if (s === " ") continue
      if (index === 0) {
        adjustedName += s.toLowerCase()
        index++;
        continue
      }
      
      adjustedName += s;
    }

    return adjustedName
  } */

  render() {
    const { name, type = "text", placeholder = "" } = this.props;
    return (
      <>
        <label>{name}</label>
        <input
          type={type}
          placeholder={placeholder}
          data-name={name}
        ></input>
      </>
    );
  }
}
