import React, { useState } from "react";

const ListToggle = (props) => {
  let [toggled, setToggled] = useState(false);

  const handleClick = () => {
    if (toggled === true) {
      setToggled(false);
      props.itemsCall(false);
    } else {
      setToggled(true);
      props.itemsCall(true);
    }
  };

  return (
    <div onClick={handleClick} data-toggled={toggled} className="ListToggle">
      <div>
        <i className="fa fa-fw fa-plus"></i>
        <i className="fa fa-fw fa-check"></i>
      </div>
    </div>
  );
};

export default ListToggle;
