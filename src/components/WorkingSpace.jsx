import React from "react";

function WorkingSpace() {
  function w3_open() {
    console.log("open clicked");
    document.getElementById("mySidebar").style.display = "block";
  }

  function w3_close() {
    console.log("close clicked");
    document.getElementById("mySidebar").style.display = "none";
  }

  return (
    <div>
      <div
        className="w3-sidebar w3-bar-block w3-collapse w3-card"
        style={{ width: "200px" }}
        id="mySidebar"
      >
        <button
          className="w3-bar-item w3-button w3-hide-large"
          onClick={w3_close}
        >
          Close &times;
        </button>
        <a href="#" className="w3-bar-item w3-button">
          Link 1
        </a>
        <a href="#" className="w3-bar-item w3-button">
          Link 2
        </a>
        <a href="#" className="w3-bar-item w3-button">
          Link 3
        </a>
      </div>

      <div className="w3-main" style={{ marginLeft: "200px" }}>
        <div className="w3-teal">
          <button className="w3-button w3-teal w3-xlarge" onClick={w3_open}>
            &#9776;
          </button>
          <div className="w3-container">
            <h1>My Page</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkingSpace;
