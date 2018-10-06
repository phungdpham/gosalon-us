import React from "react";

export const CardHeader = props => (
    <div className="card-header text-center">
        {props.uniqGroups.map(groupName => (
            <li className="list-group-item" key={groupName.id}>
                {groupName.group}
            </li>
        ))}
    </div>
);