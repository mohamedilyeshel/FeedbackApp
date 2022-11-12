import feedbackContext from "../context/FeedbackContext";
import { useContext } from "react";

// Components and Pages
import Card from "./SharedComponents/Card";
import { TiDelete, TiEdit } from "react-icons/ti";

function FeedbackItem({ item }) {
  const { deleteFeedbacks, editFeedbacks } = useContext(feedbackContext);
  return (
    <Card>
      <h2 className="text-display">{item.text}</h2>
      <p className="num-display">{item.rating}</p>
      <button
        onClick={() => {
          deleteFeedbacks(item.id);
        }}
        className="close"
      >
        <TiDelete />
      </button>
      <button
        className="edit"
        onClick={() => {
          editFeedbacks(item.id, item.text, item.rating);
        }}
      >
        <TiEdit />
      </button>
    </Card>
  );
}

FeedbackItem.defaultProps = {
  item: { id: 1, text: "No feedback", rating: 0 },
};

export default FeedbackItem;
