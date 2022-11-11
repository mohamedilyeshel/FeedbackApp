import { createContext, useState } from "react";
import { v4 } from "uuid";

const feedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState([
    { itemId: 55589, itemRating: 8, itemText: "Lorem ipulsum from context" },
    {
      itemId: 5599959,
      itemRating: 2,
      itemText: "Lorem ipulsum 22 from context",
    },
    {
      itemId: 5115589,
      itemRating: 1,
      itemText: "Lorem ipuhhhlsum from context",
    },
  ]);

  const [feedbackText, setFeedbackText] = useState("");
  const [feedbackRating, setFeedbackRating] = useState(null);
  const [editedId, seteditedId] = useState(null);

  const deleteFeedbacks = (id) => {
    setFeedbacks(
      feedbacks.filter((feedback) => {
        return id !== feedback.itemId;
      })
    );
  };

  const addFeedback = () => {
    // First Method using a new a array to set the value of state as array
    // let feedbacks = feedBackItems.map((item) => {
    //   return item;
    // });
    // let id = v4();
    // feedbacks.unshift({
    //   itemId: id,
    //   itemRating: rate,
    //   itemText: text,
    // });
    //    setFeedbackItems(feedbacks);
    // Second method using
    setFeedbacks((prev) => {
      return [
        {
          itemId: v4(),
          itemRating: feedbackRating,
          itemText: feedbackText.trim(),
        },
        ...prev,
      ];
    });
  };

  const editFeedbacks = (id, text, rate) => {
    setFeedbackRating(rate);
    setFeedbackText(text);
    seteditedId(id);
  };

  const editFeedback = () => {
    setFeedbacks(
      feedbacks.map((feedback) => {
        if (feedback.itemId === editedId) {
          return {
            itemId: editedId,
            itemText: feedbackText.trim(),
            itemRating: feedbackRating,
          };
        }
        return feedback;
      })
    );
    seteditedId(null);
  };

  const setFeedbacktext = (text) => {
    setFeedbackText(text);
  };

  const setFeedbackRate = (rate) => {
    setFeedbackRating(rate);
  };

  return (
    <feedbackContext.Provider
      value={{
        feedbacks,
        deleteFeedbacks,
        addFeedback,
        feedbackRating,
        feedbackText,
        setFeedbackRate,
        setFeedbacktext,
        editFeedbacks,
        editedId,
        editFeedback,
      }}
    >
      {children}
    </feedbackContext.Provider>
  );
};

export default feedbackContext;
