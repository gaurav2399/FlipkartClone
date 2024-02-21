// import React from 'react'
// import playStore from "../../../images/playStore.png";
// import appStore from "../../../images/AppStore.png";


// const Footer = () => {
//   return (
//     <div>Footer</div>
//   )
// }

// export default Footer
import React from "react";
// import playStore from "../../../images/playstore.png";
// import appStore from "../../../images/Appstore.png";
import appStore from "../Appstore.png";
import playStore from "../assets/shops/playstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>High Quality is our first priority</p>
        {/* <p>Copyrights 2021 &copy; MeAayushSharma</p> */}
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/aayush.8870">Instagram</a>
        <a href="http://youtube.com/AayushSharma">Youtube</a>
        <a href="http://instagram.com/aayush.8870">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;