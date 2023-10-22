import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, translateY: 25 },
  visible: {
    opacity: 1,
    translateY: 0,
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.25, delay: 0 },
  },
};

const Guide = () => {
  const cardRef = useRef();
  const inView = useInView(cardRef, { amount: 0.15, once: true });

  const guides = Array(3).fill({
    img: "https://images.unsplash.com/photo-1674456720401-1557c76bf72c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNyYW15JTIwc3BhZ2hldHRpfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    dishName: "Creamy Spaghetti",
    profileImg:
      "https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png",
    profileName: "Peter Pan",
    date: "March 20, 2022",
  });

  return (
    <section className="guide">
      <div className="guideContainer setWidth">
        <motion.div
          className="bigCard"
          variants={cardVariants}
          ref={cardRef}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover="hover"
        >
          <h2 style={{ textAlign: "center" }}>Gift Guide for foodies</h2>
          <img src={guides[0].img} alt={guides[0].dishName} />
          <div className="btnContainer">
            <button className="btnPrime2">Products</button>
            <p>5 min Read</p>
          </div>
          <hr className="hrLine"></hr>
          <div className="profile">
            <img src={guides[0].profileImg} alt={guides[0].profileName}></img>
            <p>{guides[0].profileName}</p>
            <p>{guides[0].date}</p>
          </div>
        </motion.div>
        <div className="smallCardContainer">
          {guides.map((guide, i) => {
            return (
              <motion.div
                className="smallCard"
                key={i}
                variants={cardVariants}
                ref={cardRef}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                whileHover="hover"
              >
                <div className="imgContainer">
                  <img
                    src={guide.img}
                    width="auto"
                    height="100%"
                    alt={guide.dishName}
                  ></img>
                </div>
                <div className="info">
                  <h3>{guide.dishName}</h3>
                  <div className="btnContainer">
                    <button className="btnPrime2">Products</button>
                    <p>5 min Read</p>
                  </div>
                  <hr className="hrLine"></hr>
                  <div className="profile">
                    <img src={guide.profileImg} alt={guide.profileName}></img>
                    <p>{guide.profileName}</p>
                    <p>{guide.date}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Guide;

/* <div className="smallCard">
            <div className="imgContainer">
              <img
                src="https://images.unsplash.com/photo-1674456720401-1557c76bf72c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNyYW15JTIwc3BhZ2hldHRpfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                width="auto"
                height="100%"
                alt="Creamy Spaghetti"
              ></img>
            </div>
            <div className="info">
              <h3>Creamy Spaghetti</h3>
              <div className="btnContainer">
                <button className="btnPrime2">Products</button>
                <p>5 min Read</p>
              </div>
              <hr className="hrLine"></hr>
              <div className="profile">
                <img
                  src="https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png"
                  alt="peter"
                ></img>
                <p>Peter Pan</p>
                <p>March 20, 2022</p>
              </div>
            </div>
          </div> */
