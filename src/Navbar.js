import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navContainer">
      <div className="navbar flex">
        <div>
          <h1>My Food</h1>
        </div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/recipes">Recipes</Link>
          <Link to="/tips">Tips</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
