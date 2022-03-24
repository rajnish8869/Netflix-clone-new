import ListToggle from "./ListToggle";

import React, { useState } from "react";

const Item = (props) => {
  let handleListToggle = (boolean) => {
    props.titleListCall(
      boolean,
      props.id,
      props.title,
      props.score,
      props.overview,
      props.backdrop
    );
  };

  // const ListToggle = React.memo(Item);

  return (
    <div
      className="Item"
      style={{ backgroundImage: "url(" + props.backdrop + ")" }}
    >
      <div className="overlay">
        <div className="title">{props.title}</div>
        <div className="rating">{props.score} / 10</div>
        <div className="plot">{props.overview}</div>
        <ListToggle itemsCall={handleListToggle} id={props.id} />
      </div>
    </div>
  );
};

export default Item;
