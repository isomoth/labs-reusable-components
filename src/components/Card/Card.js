import React from 'react';
import './Card.css';

export const Card = ({ title, image, date, number }) => {
  return (
    <div className='card-container'>
      <img className='magic-pattern' src={image} alt='decorative page design' />
      <section className='card-contents'>
        <span className='issue-data'>
          <p>{date}</p>
          <p>{number}</p>
        </span>
        <h1 className='title'>{title}</h1>
      </section>
    </div>
  );
};
