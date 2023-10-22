import React, { useRef } from "react";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { motion, useInView } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, translateY: 25 },
  visible: {
    opacity: 1,
    translateY: 0,
  },
  hover: {
    translateY: -10,
    transition: { delay: 0 },
  },
};

const Kitchen = () => {
  const kitchenItems = Array(12).fill("Breakfast");
  const cardRef = useRef(null);
  const inView = useInView(cardRef, { amount: 0.5, once: true });

  return (
    <section className="kitchen">
      <div className="kitchenContainer setWidth">
        <div className="kitchenHeading">
          <div>
            <p>IN MY</p>
            <h1>KITCHEN</h1>
          </div>
          <div style={{ flexGrow: "1" }}>
            <hr className="hrLine"></hr>
          </div>
        </div>
        <div className="kitchenContent">
          {kitchenItems.map((item, i) => {
            return (
              <motion.div
                key={i}
                className="kitchenCards"
                variants={cardVariants}
                ref={cardRef}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover="hover"
              >
                <i>
                  <MdOutlineFreeBreakfast size={80} />
                </i>
                <p>{item}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Kitchen;
