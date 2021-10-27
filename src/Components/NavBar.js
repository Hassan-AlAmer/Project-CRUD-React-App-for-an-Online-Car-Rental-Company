import { Link } from "react-router-dom";

const NavBar = () => {
    return (
      <nav className="navbar">
        <h1>Online Car Rental Company</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/create">Create New Car</Link>
        </div>
      </nav>
    );
  }
   
  export default NavBar;