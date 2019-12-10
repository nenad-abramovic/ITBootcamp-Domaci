import React from 'react';
import { fillYearsToArray } from '../utilities/date-utility';

export const DataYearFilter = (props) => {
    let { handleChange, data } = props;
    let years = fillYearsToArray(...data);

    return (
        <select defaultValue="" id="year-filter" onChange={handleChange} placeholder="Choose year">
            <option value="" style={{display:"none"}}>Choose year</option>
            {
                years.map(x => <option key={x} value={x}>{x}</option>)
            }
        </select>
    );
}