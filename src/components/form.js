import { Component } from 'react';
import { GeneralInfo } from './generalinfo'
import { EducationalExp } from './educationalexp'
import { ProfessionalExp } from './professionalexp'


export class Form extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <form>
        <GeneralInfo />
        <EducationalExp />
        <ProfessionalExp /> 
        <button type="submit">Submit</button>
      </form>
    )
  }
}

