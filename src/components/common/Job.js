import React from 'react';
import Project from './Project';
import ItemMenuIcon from './ItemMenuIcon';
import JobDetail from './JobDetail';

class Job extends React.Component {

  constructor(props) {

    super(props)
  }

  render() {
    const { idx, experience, toggleMenuCb } = this.props,
      {from, to, title, company, city, state, projects, skills } = experience;

    return (
      <div id={"job_" + idx} className="job">
        <div>
          <div className="job_date">
            <h4>{to ? `${from} - ${to}` : `${from}`}</h4>
          </div>
        </div>
        <div className="job_header">
          <div className="job_title">
            <h3>{`${title}`}</h3>
            <h3>&nbsp;@&nbsp;</h3>
            <h3>{`${company}`}</h3>
          </div>
          <div className="job_location">
            <h3>{`${city}, ${state}`}</h3>
          </div>
        </div>
        <JobDetail key={'profile_job_detail' + idx} idx={idx} experience={experience} />
      </div>
    );
  }
}

export default Job;
