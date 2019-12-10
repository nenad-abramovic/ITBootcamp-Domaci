import React from 'react';
import { Launch } from './launch';

// Has attribute data, which is array that uses for display
export const LaunchList = (props) => {
    let { data } = props;
        return (
        <div className="l-list">
            {
                data.map(x => <Launch launch={x} key={x.flight_number} />)
            }
        </div>
    );
}