import React from "react";
import RecentTitleList from "./RecentTitleList";

const Recent = (props) => {
  return (
    <div className="Recent">
      <RecentTitleList title="Recent Search" url={props.searchTerm} />
    </div>
  );
};

export default Recent;
