import React, { useState, useEffect } from 'react';
import { getCompanyInfo } from '../utilities/space-x-service';

export const Header = () => {
    const [info, setInfo] = useState({});

    useEffect(() => {
        getCompanyInfo()
        .then(data => { console.log(data);setInfo(data)});
    }, []);

    return (
        <header>
            <h1>{info.name}</h1>
            <label>Year founded: {info.founded}</label>
            <br />
            <label>Founder: {info.founder}</label>
            <br />
            <label>CEO: {info.ceo}</label>
            <br />
            <label>{info.summary}</label>
        </header>
    );
}