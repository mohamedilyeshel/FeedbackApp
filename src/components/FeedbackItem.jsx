import feedbackContext from "../context/FeedbackContext";
import { useContext } from "react";

// Components and Pages
import Card from "./SharedComponents/Card";
import { TiDelete, TiEdit } from "react-icons/ti";

function FeedbackItem({ item }) {
  const { deleteFeedbacks, editFeedbacks } = useContext(feedbackContext);
  return (
    <Card>
      <h2 className="text-display">{item.itemText}</h2>
      <p className="num-display">{item.itemRating}</p>
      <button
        onClick={() => {
          deleteFeedbacks(item.itemId);
        }}
        className="close"
      >
        <TiDelete />
      </button>
      <button
        className="edit"
        onClick={() => {
          editFeedbacks(item.itemId, item.itemText, item.itemRating);
        }}
      >
        <TiEdit />
      </button>
    </Card>
  );
}

FeedbackItem.defaultProps = {
  item: { itemId: 1, itemText: "No feedback", itemRating: 0 },
};

export default FeedbackItem;
