import { useContext, useState, useEffect } from "react";
import feedbackContext from "../context/FeedbackContext";

// Components and Pages
import RatingSelect from "./RatingSelect";
import AlertMessage from "./SharedComponents/AlertMessage";
import Button from "./SharedComponents/Button";
import Card from "./SharedComponents/Card";

function FeedbackForm() {
  const {
    addFeedback,
    feedbackText,
    setFeedbackRate,
    setFeedbacktext,
    editedId,
    editFeedback,
  } = useContext(feedbackContext);

  // const [feedbackText, setFeedbackText] = useState("");
  // const [feedbackRating, setFeedbackRating] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (editedId !== null) {
      setDisabled(false);
    }
  }, [editedId]);

  const verifyInput = (e) => {
    if (!e.target.value) {
      setMessage("");
      setDisabled(true);
    } else if (e.target.value && e.target.value.trim().length < 10) {
      setMessage("Write at least 10 characters");
      setDisabled(true);
    } else {
      setMessage("");
      setDisabled(false);
    }

    setFeedbacktext(e.target.value);
  };

  return (
    <Card>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!editedId) {
            addFeedback();
          } else {
            editFeedback();
          }
          setFeedbacktext("");
          setFeedbackRate(null);
          setDisabled(true);
        }}
      >
        <h2>Rate our service</h2>
        <RatingSelect />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write your feedback here"
            onChange={verifyInput}
            value={!feedbackText ? "" : feedbackText}
          />
          <Button type="submit" version="secondary" isDisabled={disabled}>
            Send
          </Button>
        </div>
        {message && <AlertMessage type="error">{message}</AlertMessage>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
