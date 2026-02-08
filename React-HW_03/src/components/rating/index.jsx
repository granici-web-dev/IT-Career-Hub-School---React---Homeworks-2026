import { useState } from 'react';

function Rating() {
  const [ratingValue, setRatingValue] = useState(0);

  const ratingList = [
    {
      label: 'Отлично',
      img: 'https://www.clipartmax.com/middle/m2i8H7A0A0Z5A0K9_5-star-rating-png/',
    },
    {
      label: 'Хорошо',
      img: 'https://www.clipartmax.com/png/small/67-676956_out-of-3-out-of-5-star-rating.png',
    },
    {
      label: 'Приемлемо',
      img: 'https://www.clipartmax.com/png/small/73-731815_stars-clipart-2-5-star-rating.png',
    },
    {
      label: 'Плохо',
      img: 'https://www.clipartmax.com/png/small/297-2970338_rating-2-out-of-5-gold-stars.png',
    },
  ];

  return (
    <div>
      <img src={ratingList[ratingValue].img} alt={ratingList[ratingValue].label} />

      {ratingList.map((item, index) => (
        <button key={item.label} onClick={() => setRatingValue(index)}>
          {item.label}
        </button>
      ))}
    </div>
  );
}

export default Rating;
