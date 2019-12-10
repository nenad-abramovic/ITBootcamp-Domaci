import React, { useState, useEffect } from 'react';
import { getCompanyInfo } from '../utilities/space-x-service';

export const InfoDisplay = () => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    getCompanyInfo()
      .then(data => { console.log(data); setInfo(data) });
  }, []);

  return (
    <>
      <h1>{info.name}</h1>
      <label>Year founded: {info.founded}</label>
      <label>Founder: {info.founder}</label>
      <label>CEO: {info.ceo}</label>
      <br />
      <label>{info.summary}</label>
    </>
  );
}