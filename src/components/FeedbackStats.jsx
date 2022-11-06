import { useContext } from "react";
import feedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
  const { feedbacks } = useContext(feedbackContext);
  const averageRatings = () => {
    if (!feedbacks || feedbacks.length === 0) {
      return 0;
    }

    return (
      feedbacks
        .map((item) => {
          return item.itemRating;
        })
        .reduce((totalRatings, currentRatings) => {
          return totalRatings + currentRatings;
        }) / feedbacks.length
    );
  };

  return (
    <div className="feedback-stats">
      <h4>Total of Ratings: {!feedbacks ? 0 : feedbacks.length}</h4>
      <h4>Average Rating: {averageRatings().toFixed(2)}</h4>
    </div>
  );
}

export default FeedbackStats;
