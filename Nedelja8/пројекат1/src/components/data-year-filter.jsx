import React from 'react';
import { fillYearsToArray } from '../utilities/date-utility';

export const DataYearFilter = (props) => {
    let { handleChange, data } = props;
    let years = fillYearsToArray(...data);

    return (
        <select id="year-filter" onChange={handleChange}>
            {
                years.map(x => <option key={x} value={x}>{x}</option>)
            }
        </select>
    );
}