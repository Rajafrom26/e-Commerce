import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const QuantityDisplay = ({ quantity }) => {
  const [lastQuantity, setLastQuantity] = useState(quantity);
  const isIncreasing = quantity > lastQuantity;

  useEffect(() => {
    setLastQuantity(quantity);
  }, [quantity]);

  return (
    <AnimatePresence mode="popLayout">
      <motion.span
        key={quantity} // re-render when quantity changes
        initial={{ y: isIncreasing ? 20 : -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="font-bold text-lg min-w-5 text-center"
      >
        {quantity}
      </motion.span>
    </AnimatePresence>
  );
};

export default QuantityDisplay;