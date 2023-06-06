import "../index.css";
import { MdOutlineFreeBreakfast } from "react-icons/md";

const Content = () => {
  return (
    <main className="main">
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

      <section className="guide">
        <div className="guideContainer">
          <div className="bigCard">
            <h2 style={{ textAlign: "center" }}>Gift Guide for foodies</h2>
            <img src="https://images.unsplash.com/photo-1674456720401-1557c76bf72c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNyYW15JTIwc3BhZ2hldHRpfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"></img>
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
          <div className="smallCardContainer">
            <div className="smallCard">
              <div className="imgContainer">
                <img
                  src="https://images.unsplash.com/photo-1674456720401-1557c76bf72c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNyYW15JTIwc3BhZ2hldHRpfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  width="auto"
                  height="100%"
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
            </div>
            <div className="smallCard">
              <div className="imgContainer">
                <img
                  src="https://images.unsplash.com/photo-1674456720401-1557c76bf72c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNyYW15JTIwc3BhZ2hldHRpfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  width="auto"
                  height="100%"
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
            </div>
            <div className="smallCard">
              <div className="imgContainer">
                <img
                  src="https://images.unsplash.com/photo-1674456720401-1557c76bf72c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNyYW15JTIwc3BhZ2hldHRpfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  width="auto"
                  height="100%"
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
            </div>
          </div>
        </div>
      </section>

      <section className="kitchen">
        <div className="kitchenContainer">
          <div className="kitchenHeading">
            <div>
              <p>IN MY</p>
              <h1>KITCHEN</h1>
            </div>
            <div style={{flexGrow: "1"}}><hr className="hrLine"></hr></div>
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

      <section className="season">
        <div className="seasonContainer">
          <div className="seasonHeading">
            <div style={{flexGrow: "1"}}>
            <hr className="hrLine"></hr>
            </div>
            <div>
              <p>IN</p>
              <h1>SEASON</h1>
            </div>
          </div>
          <div className="seasonContent">
            <div className="seasonCards">
              <div>
                <img src="https://lacuisinedegeraldine.fr/wp-content/uploads/2023/04/spring-quiche-Geraldine-Leverd-89-3.jpg" alt="Spring Quiche"></img>
              </div>
              <div>
                <h3> Spring Quiche with vegetables</h3>
                <p>Gluten free with potato crust!</p>
              </div>
            </div>
            <div className="seasonCards">
              <div>
                <img src="https://lacuisinedegeraldine.fr/wp-content/uploads/2023/04/spring-quiche-Geraldine-Leverd-89-3.jpg" alt="Spring Quiche"></img>
              </div>
              <div>
                <h3> Spring Quiche with vegetables</h3>
                <p>Gluten free with potato crust!</p>
              </div>
            </div>
            <div className="seasonCards">
              <div>
                <img src="https://lacuisinedegeraldine.fr/wp-content/uploads/2023/04/spring-quiche-Geraldine-Leverd-89-3.jpg" alt="Spring Quiche"></img>
              </div>
              <div>
                <h3> Spring Quiche with vegetables</h3>
                <p>Gluten free with potato crust!</p>
              </div>
            </div>
            <div className="seasonCards">
              <div>
                <img src="https://lacuisinedegeraldine.fr/wp-content/uploads/2023/04/spring-quiche-Geraldine-Leverd-89-3.jpg" alt="Spring Quiche"></img>
              </div>
              <div>
                <h3> Spring Quiche with vegetables</h3>
                <p>Gluten free with potato crust!</p>
              </div>
            </div>
            <div className="seasonCards">
              <div>
                <img src="https://lacuisinedegeraldine.fr/wp-content/uploads/2023/04/spring-quiche-Geraldine-Leverd-89-3.jpg" alt="Spring Quiche"></img>
              </div>
              <div>
                <h3> Spring Quiche with vegetables</h3>
                <p>Gluten free with potato crust!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Content;
