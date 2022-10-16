import { useState } from "react";

function FeedbackItem({ feedbackText, feedbackRating }) {
  const [rating, setRating] = useState(feedbackRating);
  const [text, setText] = useState(feedbackText);

  return (
    <div className="card">
      <h2 className="text-display">{text}</h2>
      <p className="num-display">{rating}</p>
    </div>
  );
}

FeedbackItem.defaultProps = {
  feedbackRating: 0,
  feedbackText: "No Feedback Text",
};

export default FeedbackItem;
