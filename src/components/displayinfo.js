import { Component } from "react";

export class DisplayInfo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    
    const { formInfo } = this.props
    return (
      <div className="info-preview">

        <div className="top-section">
          <h1 className="full-name">{`${formInfo.firstName} ${formInfo.lastName}` || ""}</h1>
          <div className="email">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z"/></svg>
            <p>{`${formInfo.email}`}</p>
          </div>
          
          <div className="phone">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16 2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-3 19h-2v-1h2v1zm3-2H8V5h8v14z"/></svg>
            <p>{`${formInfo.phoneNumber}`}</p>
          </div>
        </div>  
        <hr />

        <div className="middle-section">
          <div className="work">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21q-.825 0-1.413-.588T2 19V8q0-.825.588-1.413T4 6h4V4q0-.825.588-1.413T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8v11q0 .825-.588 1.413T20 21H4Zm6-15h4V4h-4v2Z"/></svg>
            <h2>Professional Experience</h2>
          </div>
          
          <h4>Company Name</h4>
          <p>{`${formInfo.phoneNumber}`}</p>
          <h4>Job Title</h4>
          <p>{`${formInfo.jobTitle}`}</p>
          <h4>Worked From</h4>
          <p>{`${formInfo.from} to ${formInfo.until}`}</p>
          <h4>Main Tasks</h4>
          <p>{`${formInfo.mainTasks}`}</p>
        </div>
        <br />
        <hr />

        <div className="bottom-section">
          <div className="education-preview">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M3.33 8L10 12l10-6l-10-6L0 6h10v2H3.33zM0 8v8l2-2.22V9.2L0 8zm10 12l-5-3l-2-1.2v-6l7 4.2l7-4.2v6L10 20z"/></svg>
            <h2>Education</h2>
          </div>

          
          <h4>Degree</h4>
          <p>{`${formInfo.degree}`}</p>
          <h4>Institution</h4>
          <div className="inst-info">
            <p>{`${formInfo.institution}`}</p>
            <p>{`(${formInfo.startDate} - ${formInfo.endDate})`}</p>
          </div>
          
        </div>

      </div>
    )
  }
}