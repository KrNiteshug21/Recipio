import React from "react";
import { MdOutlineFreeBreakfast } from "react-icons/md";

const Kitchen = () => {
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
          <div className="kitchenCards">
            <i>
              <MdOutlineFreeBreakfast size={80} />
            </i>
            <p>Breakfast</p>
          </div>
          <div className="kitchenCards">
            <i>
              <MdOutlineFreeBreakfast size={80} />
            </i>
            <p>Lunch</p>
          </div>
          <div className="kitchenCards">
            <i>
              <MdOutlineFreeBreakfast size={80} />
            </i>
            <p>Breakfast</p>
          </div>
          <div className="kitchenCards">
            <i>
              <MdOutlineFreeBreakfast size={80} />
            </i>
            <p>Breakfast</p>
          </div>
          <div className="kitchenCards">
            <i>
              <MdOutlineFreeBreakfast size={80} />
            </i>
            <p>Breakfast</p>
          </div>
          <div className="kitchenCards">
            <i>
              <MdOutlineFreeBreakfast size={80} />
            </i>
            <p>Breakfast</p>
          </div>
          <div className="kitchenCards">
            <i>
              <MdOutlineFreeBreakfast size={80} />
            </i>
            <p>Breakfast</p>
          </div>
          <div className="kitchenCards">
            <i>
              <MdOutlineFreeBreakfast size={80} />
            </i>
            <p>Breakfast</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kitchen;
