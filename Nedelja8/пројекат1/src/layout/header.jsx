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
            <label>{info.founded}</label>
            <label>{info.founder}</label>
            <label>{info.ceo}</label>
            <label>{info.summary}</label>
        </header>
    );
}