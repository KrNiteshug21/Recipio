import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navContainer">
      <div className="navbar flex setWidth">
        <Link to="/">
          <h1>Recipio</h1>
        </Link>
        <nav className="nav">
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#004953" : "",
              backgroundColor: isActive ? "whitesmoke" : "",
            })}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#004953" : "",
              backgroundColor: isActive ? "whitesmoke" : "",
            })}
            to="/recipes"
          >
            Recipes
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#004953" : "",
              backgroundColor: isActive ? "whitesmoke" : "",
            })}
            to="/tips"
          >
            Tips
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#004953" : "",
              backgroundColor: isActive ? "whitesmoke" : "",
            })}
            to="/contacts"
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
