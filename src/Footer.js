import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footerContainer">
      <footer className="footer setWidth">
        <div className="footerHeading">
          <h1>My Food</h1>
        </div>
        <div className="footerContent">
          <div>
            <div>
              <hr></hr>
            </div>
            <div className="footerLinkContainer">
              <div>
                <p>
                  Tasty destination <br></br> for foodies
                </p>
              </div>
              <div className="footerLinks">
                <Link to="/">Home</Link>
                <Link to="/recipes">Recipes</Link>
                <Link to="/tips">Tips</Link>
                <Link to="/contact">Contact</Link>
              </div>
            </div>
          </div>
          <div className="formContainer">
            <div>
              <p>Join our newsletter for tastiest treats</p>
            </div>
            <form className="footerForm">
              <input type="text" placeholder="Your email address"></input>
              <input type="submit" value="SUBSCRIBE" />
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
