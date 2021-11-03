import React from 'react';
import img from 'img/magic-pattern.png';
import CardStyled from './components/CardStyled';

import { Card } from './components/Card/Card';

export const App = () => {
  return (
    <div>
      <Card
        title='The beginning of everything.'
        image={img}
        date='JANUARY 2022'
        number='01'
      />

      <CardStyled
        title='The beginning of everything.'
        image={img}
        date='JANUARY 2022'
        number='01'
      />
    </div>
  );
};
