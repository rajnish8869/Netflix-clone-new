import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div id="navigation" className="Navigation">
      <nav>
        <ul>
          <Link to="/">
            <li>Browse</li>
          </Link>
          <Link to="mylist">
            <li>My list</li>
          </Link>
          <Link to="toppick">
            <li>Top picks</li>
          </Link>
          <Link to="recent">
            <li>Recent</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
