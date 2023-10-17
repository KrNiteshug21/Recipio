import React from "react";

const Header = () => {
  return (
    <section className="headerContainer">
      <header className="header">
        <div className="headerContent">
          <h1>Magic Brownies</h1>
          <p>
            5 tips to make the best <br></br> brownies in game
          </p>
          <hr className="hrLine"></hr>
          <div className="btnContainer">
            <button className="btnPrime">How to</button>
            <button className="btnPrime">Baking</button>
            <p>12 min Read</p>
          </div>
          <div>
            <button className="readBtn">Read Now</button>
          </div>
        </div>
        <div className="headerImg">
          <img
            src="https://images.unsplash.com/photo-1564355808539-22fda35bed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1147&q=80"
            alt="Magic Brownies"
            width="100%"
          ></img>
        </div>
      </header>
    </section>
  );
};

export default Header;
