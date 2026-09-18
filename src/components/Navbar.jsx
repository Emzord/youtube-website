import {
  FiMenu,
  FiSearch,
  FiMic,
  FiPlus,
  FiBell
} from "react-icons/fi";

import { FaYoutube } from "react-icons/fa";

function Navbar({ onMenuClick }) {
  return (
    <nav className="navbar">

     <div className="navbar-left">
 <FiMenu onClick={onMenuClick} className="menu-icon" />

  <div className="youtube-logo">
    <FaYoutube className="youtube-icon" />

    <div className="premium-logo">
      <span>Premium</span>
      <small>NG</small>
    </div>
  </div>
</div>

      <div className="navbar-center">
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button>
            <FiSearch />
          </button>
        </div>

        <button className="mic-button">
          <FiMic />
        </button>
      </div>

      <div className="navbar-right">
        <button className="create-button">
          <FiPlus />
          <span>Create</span>
        </button>

        <FiBell />

        <div className="profile">
          V
        </div>
      </div>

    </nav>
  );
}

export default Navbar;