import React, { useState, useEffect } from 'react';
import { getRoadsterInfo } from '../utilities/space-x-service';

export const Footer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        getRoadsterInfo()
        .then(res => setData(res));
    }, []);

    return (
        <footer>
            <label>Name: {data.name}</label>
            <br />
            <label>Orbit type: {data.orbit_type}</label>
            <br />
            <label>{data.details}</label>
            <br />
        </footer>
    );
}