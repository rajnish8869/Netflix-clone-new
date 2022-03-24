import React, { useState, useEffect } from "react";
import Item from "./Item";

export const MyTitleList = (props) => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   props.myListData;
  // }, [props.myListData]);

  return (
    <div className="TitleList">
      {props.myListData && (
        <div className="Title">
          <h1>{props.title}</h1>
          <div className="titles-wrapper">
            {props.myListData &&
              props.myListData.map((title) => {
                return (
                  <Item
                    key={title.id}
                    title={!title.title}
                    score={title.score}
                    overview={title.overview}
                    id={title.id}
                    backdrop={title.backdrop}
                  />
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};
export default MyTitleList;
