import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cardVariants = {
  hidden: { opacity: 0, translateY: 25 },
  visible: {
    opacity: 1,
    translateY: 0,
  },
  hover: {
    translateY: -10,
    transition: { duration: 0.25 },
  },
};

const Fooditems = ({ dish, i }) => {
  const cardRef = useRef(null);
  const inView = useInView(cardRef, {
    amount: 0.5,
    once: true,
  });

  return (
    <motion.div
      key={i}
      className="recipeCards"
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.5 }}
      whileHover="hover"
    >
      <h3>{dish.recipeName}</h3>
      <img src={dish.recipeImg} alt={dish.recipeName}></img>
      <p>{dish.recipeDesc}</p>
      <h3>{dish.read}</h3>
    </motion.div>
  );
};

export default Fooditems;
