import { Component } from "react";

export class Field extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ""
    }

    this.state = {
      fieldInfo: {}
    }

    this.handleOnChange = this.handleOnChange.bind(this)
  } 

  handleOnChange(event) {
    this.setState({
      value: event.target.value
    }, () => console.log(this.state.value))
  }

  render() {
    const { name, type = "text", placeholder = "" } = this.props
    return (
      <>
        <label>{name}</label>
        <input
          type={type}
          placeholder={placeholder}
          onChange={this.handleOnChange}
        >
        </input>
      </>
    )
  }
}