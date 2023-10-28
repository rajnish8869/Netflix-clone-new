import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import TitleList from "./TitleList";

const home = (props) => {
  var [array, setArray] = useState([]);

  var handleTitleList = (boolean, id, title, score, overview, backdrop) => {
    if (array.length == 0) {
      setArray([
        ...array,
        {
          boolean: boolean,
          id: id,
          title: title,
          score: score,
          overview: overview,
          backdrop: backdrop,
        },
      ]);
    }
    for (var i = 0; i < array.length; i++) {
      if (array[i].id == id) {
        array.splice(i, 1);
        setArray(array);
      } else {
        setArray([
          ...array,
          {
            boolean: boolean,
            id: id,
            title: title,
            score: score,
            overview: overview,
            backdrop: backdrop,
          },
        ]);
      }
    }
  };

  useEffect(() => {
    props.appCall(array);
  }, [array]);

  return (
    <div>
      <Hero />
      <TitleList
        title="Search Results"
        url={props.searchTerm}
        scrollRef={props.scrollRef}
        homeCall={handleTitleList}
      />
      <TitleList
        title="Top TV picks for Rajnish"
        url={`discover/tv?sort_by=popularity.desc&page=${props.randomNumbers}`}
        homeCall={handleTitleList}
      />
      <TitleList
        title="Trending now"
        url={`discover/movie?sort_by=popularity.desc&page=${props.randomNumbers}`}
        homeCall={handleTitleList}
      />
      <TitleList
        title="Comedy magic"
        url={`genre/35/movies?sort_by=popularity.desc&page=${props.randomNumbers}`}
        homeCall={handleTitleList}
      />
      <TitleList
        title="Sci-Fi greats"
        url={`genre/878/movies?sort_by=popularity.desc&page=${props.randomNumbers}`}
        homeCall={handleTitleList}
      />
      <TitleList
        title="Most watched in Horror"
        url={`genre/27/movies?sort_by=popularity.desc&page=${props.randomNumbers}`}
        homeCall={handleTitleList}
      />
    </div>
  );
};

export default home;
