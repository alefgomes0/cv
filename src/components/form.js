import { Component } from 'react';
import { GeneralInfo } from './generalinfo'
import { EducationalExp } from './educationalexp'


export class Form extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <form>
        <GeneralInfo />
        <EducationalExp />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

