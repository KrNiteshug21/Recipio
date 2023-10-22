import React, { useRef } from "react";
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

const Season = () => {
  const dishes = Array(5).fill({
    img: "https://lacuisinedegeraldine.fr/wp-content/uploads/2023/04/spring-quiche-Geraldine-Leverd-89-3.jpg",
    dishAltImage: "Spring Quiche",
    dishName: "Spring Quiche with vegetables",
    desc: "Gluten free with potato crust!",
  });
  const cardRef = useRef(null);
  const inView = useInView(cardRef, { amount: 0.5, once: true });

  return (
    <section className="season">
      <div className="seasonContainer setWidth">
        <div className="seasonHeading">
          <div style={{ flexGrow: "1" }}>
            <hr className="hrLine"></hr>
          </div>
          <div>
            <p>IN</p>
            <h1>SEASON</h1>
          </div>
        </div>
        <div className="seasonContent">
          {dishes.map((dish, i) => {
            return (
              <motion.div
                key={i}
                className="seasonCards"
                variants={cardVariants}
                ref={cardRef}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover="hover"
              >
                <div>
                  <img
                    src="https://lacuisinedegeraldine.fr/wp-content/uploads/2023/04/spring-quiche-Geraldine-Leverd-89-3.jpg"
                    alt="Spring Quiche"
                  ></img>
                </div>
                <div>
                  <h3> Spring Quiche with vegetables</h3>
                  <p>Gluten free with potato crust!</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Season;
