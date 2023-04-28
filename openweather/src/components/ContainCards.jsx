import React from 'react';
import Card from './Card';

export default function ContainCards({ city, onClose }) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div>
      {
        city && city.map(city => {
          return <Card
            max={city.max}
            min={city.min}
            name={city.name}
            img={city.img}
            onClose={onClose}
            id={city.id}
            key={city.id}
          />
        })
      }
    </div>
  )
};