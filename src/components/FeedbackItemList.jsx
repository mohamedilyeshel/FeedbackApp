import feedbackContext from "../context/FeedbackContext";
import { useContext } from "react";
// Compoenents and Pages
import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";

function FeedbackItemList() {
  const { feedbacks } = useContext(feedbackContext);

  if (!feedbacks || feedbacks.length === 0) {
    return <h1>No feedbacks</h1>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedbacks.map((item) => {
          return (
            <motion.div
              key={item.itemId}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem key={item.itemId} item={item} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackItemList;
