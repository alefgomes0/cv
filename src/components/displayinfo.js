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
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m16.556 12.906l-.455.453s-1.083 1.076-4.038-1.862s-1.872-4.014-1.872-4.014l.286-.286c.707-.702.774-1.83.157-2.654L9.374 2.86C8.61 1.84 7.135 1.705 6.26 2.575l-1.57 1.56c-.433.432-.723.99-.688 1.61c.09 1.587.808 5 4.812 8.982c4.247 4.222 8.232 4.39 9.861 4.238c.516-.048.964-.31 1.325-.67l1.42-1.412c.96-.953.69-2.588-.538-3.255l-1.91-1.039c-.806-.438-1.787-.309-2.417.317Z"/></svg>
            <p>{`${formInfo.phoneNumber}`}</p>
          </div>
        </div>  
        <hr />

        <div className="middle-section">
          <h2>Professional Experience</h2>
          <h4>Company Name</h4>
          <p>{`${formInfo.phoneNumber}`}</p>
          <h4>Job Title</h4>
          <p>{`${formInfo.jobTitle}`}</p>
          <h4>Worked From</h4>
          <p>{`${formInfo.from} to ${formInfo.until}`}</p>
          <h4>Main Tasks</h4>
          <p>{`${formInfo.mainTasks}`}</p>
          <hr />
        </div>

        <div className="bottom-section">
          <h2>Education</h2>
          <h4>Degree</h4>
          <p>{`${formInfo.degree}`}</p>
          <h4>Institution</h4>
          <p>{`${formInfo.institution}`}</p>
          <br />
          <h5>{`(${formInfo.startDate}-${formInfo.endDate})`}</h5>
        </div>

      </div>
    )
  }
}