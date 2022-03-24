import React from "react";
import TitleList from "../home/TitleList";

const Toppick = (props) => {
  return (
    <div className="toppick">
      <TitleList
        title="Top TV picks for Rajnish"
        url={`discover/tv?sort_by=popularity.desc&page=${props.randomNumbers}`}
      />
    </div>
  );
};

export default Toppick;
