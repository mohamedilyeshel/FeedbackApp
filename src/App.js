import { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackItemList from "./components/FeedbackItemList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";

function App() {
  const data = [
    { itemId: 55589, itemRating: 8, itemText: "Lorem ipulsum" },
    { itemId: 5599959, itemRating: 6, itemText: "Lorem ipulsum 22" },
    { itemId: 5115589, itemRating: 5, itemText: "Lorem ipuhhhlsum" },
  ];

  const [feedBackItems, setFeedbackItems] = useState(data);

  const deleteFeedbacks = (id) => {
    setFeedbackItems(
      feedBackItems.filter((feedbackItem) => {
        return id !== feedbackItem.itemId;
      })
    );
  };

  const addFeedback = (text) => {
    let feedbacks = feedBackItems.map((item) => {
      return item;
    });

    feedbacks.unshift({
      itemId: 1,
      itemRating: 8,
      itemText: text,
    });

    setFeedbackItems(feedbacks);
  };

  return (
    <>
      <Header
        appTitle="Feedback UI"
        desc="a React application to make CRUD of feedbacks"
      />
      <div className="container">
        <FeedbackForm addFeedback={addFeedback} />
        <FeedbackStats feedbacks={feedBackItems} />
        <FeedbackItemList
          feedbacks={feedBackItems}
          deleteFeedbacks={deleteFeedbacks}
        />
      </div>
    </>
  );
}

export default App;
