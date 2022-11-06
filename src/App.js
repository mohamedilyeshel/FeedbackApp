import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FeedbackProvider } from "./context/FeedbackContext";

//Components and Pages
import FeedbackForm from "./components/FeedbackForm";
import FeedbackItemList from "./components/FeedbackItemList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import About from "./pages/About";
import AboutIcon from "./components/AboutIcon";

function App() {
  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Header
          appTitle="Feedback UI"
          desc="a React application to make CRUD of feedbacks"
        />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackItemList />
                  <AboutIcon />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<h1>404 Page Not Found</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </FeedbackProvider>
  );
}

export default App;
