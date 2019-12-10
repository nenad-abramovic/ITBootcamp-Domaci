import React, { useState, useEffect } from 'react';
import { getPastLaunches } from '../utilities/space-x-service';
import { LaunchList } from './launch-list';
import { DataYearFilter } from './data-year-filter';

export const PastLList = (props) => {
    const [data, setData] = useState([]);
    const [yearRange, setYearRange] = useState([2019, 2019]);
    const [displayData, setDisplayData] = useState([]);

    
    const handleChange =(e) => {
        setDisplayData(data.filter( x => x.launch_year === e.target.value));
        
    }
    useEffect(() => {
        getPastLaunches()
    .then(data => {
        setData(data);
        setDisplayData(data);
        
        let min_year = data.reduce((acc, x) => acc > x.launch_year ? x.launch_year : acc, Infinity);
        let max_year = data.reduce((acc, x) => acc < x.launch_year ? x.launch_year : acc, 0);
        setYearRange([min_year, max_year]);
    });
}, []);

    return (
        <>
        <DataYearFilter handleChange={handleChange} data={yearRange} />
        <hr />
        <LaunchList data={displayData} />
        </>
    );
}