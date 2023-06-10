import { Component } from "react";

export class Field extends Component {
  constructor(props) {
    super(props);

/*     this.state = {
      fieldInfo: {
        name: props.name,
        value: "",
      },
    }; */

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
