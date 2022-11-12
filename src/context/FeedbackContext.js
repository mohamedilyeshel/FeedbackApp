import { useCallback } from "react";
import { useEffect, createContext, useState } from "react";

const feedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState([]);

  const [feedbackText, setFeedbackText] = useState("");
  const [feedbackRating, setFeedbackRating] = useState(null);
  const [editedId, seteditedId] = useState(null);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchFeedbacks = useCallback(async () => {
    try {
      const res = await fetch("http://localhost:8000/feedbacks");
      const json = await res.json();
      setFeedbacks(json);
      setIsLoading(false);
      setError(null);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchFeedbacks();
  }, [fetchFeedbacks]);

  const deleteFeedbacks = async (id) => {
    try {
      await fetch(`http://localhost:8000/feedbacks/${id}`, {
        method: "DELETE",
      });
      setFeedbacks(
        feedbacks.filter((feedback) => {
          return id !== feedback.id;
        })
      );
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  const addFeedback = async () => {
    try {
      const res = await fetch("http://localhost:8000/feedbacks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: feedbackText,
          rating: feedbackRating,
        }),
      });
      const json = await res.json();
      setFeedbacks((prev) => {
        return [
          {
            id: json.id,
            rating: json.rating,
            text: json.text.trim(),
          },
          ...prev,
        ];
      });
      setIsLoading(false);
      setError(null);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  const editFeedbacks = (id, text, rate) => {
    setFeedbackRating(rate);
    setFeedbackText(text);
    seteditedId(id);
  };

  const editFeedback = async () => {
    try {
      await fetch(`http://localhost:8000/feedbacks/${editedId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: feedbackText, rating: feedbackRating }),
      });
      setFeedbacks(
        feedbacks.map((feedback) => {
          if (feedback.id === editedId) {
            return {
              id: editedId,
              text: feedbackText.trim(),
              rating: feedbackRating,
            };
          }
          return feedback;
        })
      );
      seteditedId(null);
    } catch (error) {}
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
        isLoading,
        error,
      }}
    >
      {children}
    </feedbackContext.Provider>
  );
};

export default feedbackContext;
