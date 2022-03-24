import React from "react";
import MyTitleList from "./MyTitleList";

const Mylist = (props) => {
  return (
    <div className="mylist">
      <MyTitleList title="Rajnish List" myListData={props.myList} />
    </div>
  );
};

export default Mylist;
