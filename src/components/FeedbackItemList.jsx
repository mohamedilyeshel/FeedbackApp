import feedbackContext from "../context/FeedbackContext";
import { useContext } from "react";

// Compoenents and Pages
import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";

function FeedbackItemList() {
  const { feedbacks, isLoading, error } = useContext(feedbackContext);

  if (error) {
    return <h1>{error}</h1>;
  }

  if (!isLoading && (!feedbacks || feedbacks.length === 0)) {
    return <h1>No Feedbacks!</h1>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          feedbacks.map((item) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <FeedbackItem key={item.id} item={item} />
              </motion.div>
            );
          })
        )}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackItemList;
