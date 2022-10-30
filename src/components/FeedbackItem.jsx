import Card from "./SharedComponents/Card";

function FeedbackItem({ feedbackText, feedbackRating }) {
  return (
    <Card reverse={false}>
      <h2 className="text-display">{feedbackText}</h2>
      <p className="num-display">{feedbackRating}</p>
    </Card>
  );
}

FeedbackItem.defaultProps = {
  feedbackRating: 0,
  feedbackText: "No Feedback Text",
};

export default FeedbackItem;
