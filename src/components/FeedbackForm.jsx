import { useState } from "react";
import RatingSelect from "./RatingSelect";
import AlertMessage from "./SharedComponents/AlertMessage";
import Button from "./SharedComponents/Button";
import Card from "./SharedComponents/Card";

function FeedbackForm({ addFeedback }) {
  const [feedbackText, setFeedbackText] = useState("");
  const [feedbackRating, setFeedbackRating] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [message, setMessage] = useState("");

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

    setFeedbackText(e.target.value);
  };

  return (
    <Card>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addFeedback(feedbackText, feedbackRating);
        }}
      >
        <h2>Rate our service</h2>
        <RatingSelect
          setRating={(rate) => {
            setFeedbackRating(rate);
          }}
        />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write your feedback here"
            onChange={verifyInput}
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
