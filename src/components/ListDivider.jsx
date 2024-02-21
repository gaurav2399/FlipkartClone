import React from "react";

function ListDivider(props) {
  return (
    <div className="list-divider" id={props.divider === "Top Categories" ? "top-categories" : "top-shops"}>
      <hr />
      <div>
        <h3 className="divider-heading">{props.divider}</h3>
        <a className="divider-see-more">{props.divider === "Top Shops" ? "View All" : "See More"}</a>
      </div>
      <hr />
    </div>
  );
}

export default ListDivider;
