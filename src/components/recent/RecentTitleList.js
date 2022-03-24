import React, { useState, useEffect } from "react";
import Item from "../home/Item";

export const RecentTitleList = (props) => {
  const [data, setData] = useState([]);

  const apiKey = "a4e58d56fe8690c89ebed28c6816ff3f";

  useEffect(() => {
    var requestUrl =
      "https://api.themoviedb.org/3/" + props.url + "&api_key=" + apiKey;

    fetch(requestUrl)
      .then((response) => {
        return response.json();
      })
      .then((datas) => {
        setData(datas);
        // if (data == []) {
        //   setData(datas);
        // } else {
        //   setData(...data, datas);
        // }
      })
      .catch((err) => {
        console.log("There has been an error");
      });
  }, [props.url]);

  // console.log("data", data);

  return (
    <div className="TitleList">
      {data.results && (
        <div className="Title">
          <h1>{props.title}</h1>
          <div className="titles-wrapper">
            {data.results &&
              data.results.map((title) => {
                return (
                  <Item
                    key={title.id}
                    title={!title.name ? title.original_title : title.name}
                    score={title.vote_average}
                    overview={title.overview}
                    id={title.id}
                    backdrop={
                      !title.backdrop_path
                        ? `http://image.tmdb.org/t/p/original${title.poster_path}`
                        : `http://image.tmdb.org/t/p/original${title.backdrop_path}`
                    }
                  />
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};
export default RecentTitleList;
