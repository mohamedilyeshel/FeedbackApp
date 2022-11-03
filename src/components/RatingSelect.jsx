import React from "react";

function RatingSelect({ setRating }) {
  const generateRatings = () => {
    const ratings = [];
    for (let i = 0; i < 11; i++) {
      ratings.push(
        <>
          <input
            type="radio"
            name="rate"
            id={`rate-${i}`}
            value={i}
            onChange={() => setRating(i)}
          />
          <label htmlFor={`rate-${i}`}>{i}</label>
        </>
      );
    }

    return ratings;
  };

  return (
    <ul className="rating">
      {generateRatings().map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
}

export default RatingSelect;
