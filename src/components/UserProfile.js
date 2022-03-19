import React from "react";
import Image from "../favicon.ico";

const UserProfile = () => {
  return (
    <div className="UserProfile">
      <div className="User">
        <div className="name">Rajnish Kumar Singh</div>
        <div className="image">
          <img src={Image} alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
