import React from 'react';
import getSerbianDate from '../utilities/date-utility';

// Has attribute launch which has info about launch
export const Launch = (props) => {
    let { launch } = props;
    let { 
        mission_name: m_name,
        launch_date_utc: l_date, 
        rocket: { rocket_name: r_name },
        links: { mission_patch: m_patch}
    } = launch;

    let date = new Date(l_date);

    return (
        <div className="launch">
            <label>{m_name}</label>
            <br />
            <img src={m_patch === null ? 'https://camo.githubusercontent.com/c565a964982ae51544b3b2b8fd032f3797531fc2/687474703a2f2f692e696d6775722e636f6d2f654c37334969742e706e67' : m_patch } alt="mission patch" className="mission-logo" />
            <br />
            
            <label>{getSerbianDate(date)}</label>
            <br />

            <label>{r_name}</label>
        </div>
    );
}