import React, { useState } from "react";
import categories from "./Categories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

function Admin() {

    const [img, setImg] = useState("");
  function addCategory(catg) {
    return <option value={catg}>{catg}</option>;
  }

  function getLocation() {
    console.log("fetch location clicked");
    if (navigator.geolocation) {
      console.log("getting current location");
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
      alert("Geolocation is not supported by this browser.");
    }
  }

  function showPosition(position) {
    alert("Location fetched!!");
    console.log(
      "latitude " +
        position.coords.latitude +
        " longitude " +
        position.coords.longitude
    );
  }

  function loadImage(event){
	setImg(URL.createObjectURL(event.target.files[0]));
  }

  return (
    <div>
    <a href="/">Home</a>
    <div></div>
      <h4>ADD SHOP</h4>
      {/* in future we can take use of any api to 
        take out readable address from location */}
      <form>
        <label>Shop Name</label>
        <input type="text" placeholder="Enter your shop name" />
        <br />
        <label>Location</label>
        <input type="text" placeholder="Enter your shop location"></input>
        <br />
        <label>Choose category for your shop:</label>
        <select name="categories" id="categories">
          {categories.map((catg) => addCategory(catg.name))}
        </select>
        <br />
        <label for="avatar">Choose a shop picture:</label>
        <input
          type="file"
          id="shop-image"
          name="shop-image"
          accept="image/png, image/jpeg, image/jpg"
          onChange={loadImage}
        ></input><br />
        <img id="image" className="add-shop-img" src={img} alt="shop-image"></img><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Admin;
