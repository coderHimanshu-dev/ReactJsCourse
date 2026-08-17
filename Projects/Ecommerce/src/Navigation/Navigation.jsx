import "./Navigation.css";
import { FiHeart } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";

const Navigation = () => {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter you search shoes."
        />
      </div>
      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
          <FaShoppingCart className="nav-icons" />
          <AiOutlineUser className="nav-icons" />
          
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
