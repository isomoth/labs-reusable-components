import React from 'react';
import img from 'img/magic-pattern.png';
import { CardStyled, Img, Title, Date } from './components/CardStyled';

import { Card } from './components/Card/Card';

export const App = () => {
  return (
    <>
      <div className='cards-container'>
        <Card
          title='The beginning of everything.'
          image={img}
          date='JANUARY 2022'
          number='01.'
        />
        <CardStyled />
        <Img src={img} />
        <Title>The beginning of everything.</Title>
        <Date>
          <p>JANUARY 2022</p>
          <p>01.</p>
        </Date>
      </div>
    </>
  );
};
