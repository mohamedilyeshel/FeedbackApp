import { useState } from "react";
import FeedbackItemList from "./components/FeedbackItemList";
import Header from "./components/Header";

function App() {
  const data = [
    { itemId: 55589, itemRating: 8, itemText: "Lorem ipulsum" },
    { itemId: 5599959, itemRating: 6, itemText: "Lorem ipulsum 22" },
    { itemId: 5115589, itemRating: 10, itemText: "Lorem ipuhhhlsum" },
  ];

  const [feedBackItems, setFeedbackItems] = useState(data);

  const deleteFeedbacks = (id) => {
    setFeedbackItems(
      feedBackItems.filter((feedbackItem) => {
        return id !== feedbackItem.itemId;
      })
    );
  };

  return (
    <>
      <Header
        appTitle="Feedback UI"
        desc="a React application to make CRUD of feedbacks"
      />
      <div className="container">
        <FeedbackItemList
          feedbacks={feedBackItems}
          deleteFeedbacks={deleteFeedbacks}
        />
      </div>
    </>
  );
}

export default App;
