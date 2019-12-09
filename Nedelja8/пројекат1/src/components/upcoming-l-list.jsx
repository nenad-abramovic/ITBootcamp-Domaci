import React, { useState, useEffect } from 'react';
import { getUpcomingLaunches } from '../utilities/space-x-service';
import { LaunchList } from './launch-list';
import { DataYearFilter } from './data-year-filter';

export const UpcomingLList = (props) => {
    const [data, setData] = useState([]);
    const [displayData, setDisplayData] = useState([]);
    const [yearRange, setYearRange] = useState([2000, 2019]);



    
    const handleChange =(e) => {
        setDisplayData(data.filter( x => x.launch_year == e.target.value));
    }
    useEffect(() => { 
        getUpcomingLaunches()
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
        <LaunchList data={displayData} />
        </>
    );
}