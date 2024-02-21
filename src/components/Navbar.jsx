import React from 'react';
import img1 from '../assets/1.png';
import './NavBar.css'; // Import your CSS file if you have external styles

const NavBar = () => {
  const myStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
   };

  return (
    <div>
      <div className="header">

      </div>
      <div className="tab-container">
        <section className="nav">
          <img src={img1} />
          <p>Grocery</p>
        </section>
        <section className="nav">
          <img src={img1} />
          <p>Mobile</p>
        </section>
        <section class="nav dropdown">
            <img src={img1}/>
            <p style={myStyle}>Fashion
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
                    <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                  </svg>
            </p>
            <div class="menu">
              <ul class="main-menu">
                <li>Men's Top Wear <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
                    <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                  </svg></span>
                    <ul class="inner-menu">
                        <li>All</li>
                        <li>Shirt</li>
                        <li>T-Shirt</li>
                      </ul>
                </li>
                <li>Men's Bottom Wear <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
                    <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                  </svg></span>
                    <ul class="inner-menu">
                        <li>Shoe</li>
                        <li>Slipper</li>
                        <li>Special</li>
                        <li>Crocs</li>
                    </ul>
                </li>
                <li>Women Ethinc </li>
                <li>Women Western </li>
                <li>Women Footwear</li>
                <li>Men Footwear </li>
                <li>Kid </li>
                <li>Winter </li>
                <li>Summer </li>
              </ul>

            </div>
        </section>
        <section className="nav">
          <img src={img1} />
          <p>Electronics</p>
        </section>
        <section className="nav">
          <img src={img1} />
          <p>Home</p>
        </section>
        <section className="nav">
          <img src={img1} />
          <p>Appliances</p>
        </section>
        <section className="nav">
          <img src={img1} />
          <p>Travel</p>
        </section>
        <section className="nav">
          <img src={img1} />
          <p>Top Offers</p>
        </section>
        <section className="nav">
          <img src={img1} />
          <p>Beauty, Toys & More</p>
        </section>
        <section className="nav">
          <img src={img1} />
          <p>Two Wheelers</p>
        </section>
      </div>
    </div>
  );
};

export default NavBar;
