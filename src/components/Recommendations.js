import React from 'react'

function Recommendations(props) {
    return (<><div>Recommendations</div><hr />
        <ul className="list-group">
            <li className="list-group-item list-group-item-primary"><b>Recommendation by: </b>{props.userRecomm.RecommendBy}
                <li className="list-group-item list-group-item-secondary"><b>Recommendor Company: </b>{props.userRecomm.RecommenderComp}</li>
                <li className="list-group-item list-group-item-secondary"><b>Recommendor Title: </b>{props.userRecomm.RecommenderJobTitle}</li>
                <li className="list-group-item list-group-item-secondary"><b>Referral Date: </b>{props.userRecomm.ReferralDate}</li>


                <li className="list-group-item list-group-item-secondary"><b>Referral Text</b>{props.userRecomm.ReferralText}</li>
            </li>
        </ul></>


    )
}

export default Recommendations