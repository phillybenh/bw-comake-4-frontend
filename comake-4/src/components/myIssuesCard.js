import React from 'react';

const MyIssuesCard = props => {
console.log({props})
    return (
        <div className="myIssuesCard">
            <h3>{`${props.issue.short_description}`}</h3>
            <ul>
                <li>{`${props.issue.description}`}</li>
                <li>{`Score: ${props.issue.upvotes}`}</li>

            </ul>

        </div>
    )


}
export default MyIssuesCard