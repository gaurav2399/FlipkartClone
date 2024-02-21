import React from "react";

function CategoryCard(props) {
    return (
        <div className="catg-card">
            <p className="catg-name">{props.name}</p>
            <img className="catg-img" src={props.img} alt="catg-img" />
        </div>
    )
}

export default CategoryCard;