import "../styles/main.css";
import { Link } from "react-router-dom";

const Nav = () => {

  return ( 
    <nav>
      <a href="/" className="logo">
        <h1>FortniteShop</h1>
      </a>
      <ul className="nav-links">
        <Link className={"nav-link"} to="/">
          Home
        </Link>
        <Link className={"nav-link"} to="/shop">
          Shop
        </Link>
        <Link className={"nav-link"} to="/about">
          About
        </Link>
        <Link className={"nav-link"} to="/about">
          Cart
        </Link>
      </ul>
    </nav>
  )
}

export default Nav;