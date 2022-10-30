import FeedbackItem from "./FeedbackItem";

function FeedbackItemList({ feedbacks }) {
  if (!feedbacks || feedbacks.length === 0) {
    return <h1>No feedbacks</h1>;
  }

  return (
    <div className="feedback-list">
      {feedbacks.map((item) => {
        return (
          <FeedbackItem
            key={item.itemId}
            feedbackText={item.itemText}
            feedbackRating={item.itemRating}
          />
        );
      })}
    </div>
  );
}

export default FeedbackItemList;
