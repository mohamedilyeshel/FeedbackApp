import feedbackContext from "../context/FeedbackContext";
import { useContext } from "react";

// Components and Pages
import Card from "./SharedComponents/Card";
import { TiDelete } from "react-icons/ti";

function FeedbackItem({ item }) {
  const { deleteFeedbacks } = useContext(feedbackContext);
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
    </Card>
  );
}

FeedbackItem.defaultProps = {
  item: { itemId: 1, itemText: "No feedback", itemRating: 0 },
};

export default FeedbackItem;
