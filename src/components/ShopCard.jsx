import React from "react";
import { Button } from "react-bootstrap";

function ShopCard(props) {
  function showRating(rating) {
    if (rating === 5) {
      return <p>⭐⭐⭐⭐⭐</p>;
    } else if (rating === 4) {
      return <p>⭐⭐⭐⭐</p>;
    }
  }

  return (
    <div className="shop-card">
      <img src={props.img} alt="shop-img" />
      <h4>{props.name}</h4>

      {/* <table className="shop-table">
        <tbody>
          <tr>
            <td className="key">
              <h6>Category</h6>
            </td>
            <td className="value">
              <p>{props.category}</p>
            </td>
          </tr>
          <tr>
            <td className="key">
              <h6>Location</h6>
            </td>
            <td className="value">
              <p>{props.location}</p>
            </td>
          </tr>
          <tr>
            <td className="key">
              <h6>Rating</h6>
            </td>
            <td className="value">{showRating(props.rating)}</td>
          </tr>
        </tbody>
      </table> */}

      <Button variant="primary" className="shop-btn">
        View Shop
      </Button>
    </div>
  );
}

export default ShopCard;
