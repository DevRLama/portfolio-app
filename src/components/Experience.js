import React from 'react'

function Experience(props) {

    return (<><div><h5>Experience</h5></div><hr />


        <ul className="list-group">
            <li className="list-group-item list-group-item-primary"><b>Company Name:</b>{props.userExp.CompName}
                <li className="list-group-item list-group-item-secondary"> <b>Job Title:</b> {props.userExp.JobTitle}</li>
                <li className="list-group-item list-group-item-secondary"> <b>Job Duration:</b> {props.userExp.JobDuration}</li>
                <li className="list-group-item list-group-item-secondary"> <b>Projects Done:</b> {props.userExp.Projectsdone}</li>
                <li className="list-group-item list-group-item-secondary"><b>Achievements: </b>{props.userExp.Achievements}</li>
            </li>
        </ul>

    </>

    )
}

export default Experience