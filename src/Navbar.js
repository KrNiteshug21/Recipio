import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navContainer">
      <div className="navbar flex setWidth">
        <Link to="/">
          <h1>Recipio</h1>
        </Link>
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
