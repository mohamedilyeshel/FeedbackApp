import { useContext } from "react";
import feedbackContext from "../context/FeedbackContext";

function RatingSelect() {
  const { setFeedbackRate, feedbackRating } = useContext(feedbackContext);
  const generateRatings = () => {
    const ratings = [];
    for (let i = 0; i < 11; i++) {
      ratings.push(
        <>
          <input
            type="radio"
            name="rate"
            id={`rate-${i}`}
            onChange={() => setFeedbackRate(i)}
            checked={feedbackRating === i ? true : false}
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
