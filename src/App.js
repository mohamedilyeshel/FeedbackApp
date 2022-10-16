import FeedbackItem from "./components/FeedbackItem";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header
        appTitle="Feedback UI"
        desc="a React application to make CRUD of feedbacks"
      />
      <div className="container">
        <FeedbackItem />
      </div>
    </>
  );
}

export default App;
