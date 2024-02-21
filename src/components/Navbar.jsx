import React from 'react';
import './Navbar.css'; // Import your CSS file if you have external styles

const Navbar = () => {
  return (
    <div>
      <div className="tab-container">
        <section className="nav">
          <img src="./assets/1.png" alt="Grocery" />
          <p>Grocery</p>
        </section>
        <section className="nav">
          <img src="./assets/2.png" alt="Mobile" />
          <p>Mobile</p>
        </section>
        <section className="nav dropdown">
          <img src="./assets/3.png" alt="Fashion" />
          <p style={{ display: 'flex', alignItems: 'center' }}>
            Fashion
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-caret-down"
              viewBox="0 0 16 16"
            >
              <path
                d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"
              />
            </svg>
          </p>
          {/* Menu content */}
          <div className="menu">
            <ul className="main-menu">
              <li>
                Men's Top Wear
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-caret-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"
                    />
                  </svg>
                </span>
                {/* Inner menu */}
                <ul className="inner-menu">
                  <li>All</li>
                  <li>Shirt</li>
                  <li>T-Shirt</li>
                </ul>
              </li>
              {/* Add more menu items here */}
            </ul>
          </div>
        </section>
        {/* Add more sections for other categories */}
      </div>
    </div>
  );
};

export default Navbar;
