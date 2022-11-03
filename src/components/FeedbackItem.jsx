import Card from "./SharedComponents/Card";
import { TiDelete } from "react-icons/ti";

function FeedbackItem({
  feedbackId,
  feedbackText,
  feedbackRating,
  deleteFeedbacks,
}) {
  return (
    <Card>
      <h2 className="text-display">{feedbackText}</h2>
      <p className="num-display">{feedbackRating}</p>
      <button
        onClick={() => {
          deleteFeedbacks(feedbackId);
        }}
        className="close"
      >
        <TiDelete />
      </button>
    </Card>
  );
}

FeedbackItem.defaultProps = {
  feedbackRating: 0,
  feedbackText: "No Feedback Text",
};

export default FeedbackItem;
