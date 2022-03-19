import React, { useState, useEffect } from "react";
const Search = (props) => {
  const [filterValue, setFilterValue] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const [data, setData] = useState([]);
  const apiKey = "a4e58d56fe8690c89ebed28c6816ff3f";

  useEffect(() => {
    var requestUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchValue}`;

    fetch(requestUrl)
      .then((response) => {
        return response.json();
      })
      .then((datas) => {
        setData(datas);
      })
      .catch((err) => {
        console.log("There has been an error");
      });
  }, [searchValue]);

  const onTrigger = (event) => {
    props.searchCall(event);
    setFilterValue([]);
    event.preventDefault();
  };

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
    const filterArray = data.results.filter((e) => {
      return e.original_title.toLowerCase().includes(searchValue.toLowerCase());
    });
    if (searchValue === "") {
      setFilterValue([]);
    } else {
      setFilterValue(filterArray);
    }
  };

  return (
    <div id="search" className="Search movieList">
      <input
        type="search"
        placeholder="Search for a title..."
        onChange={handleSearch}
      />
      <div className="movieList movieShow">
        {filterValue.length != 0 &&
          searchValue !== "" &&
          filterValue.map((e) => {
            return (
              <p
                style={{ cursor: "pointer" }}
                onClick={() => onTrigger(e.original_title)}
              >
                {e.original_title}
              </p>
            );
          })}
      </div>
    </div>
  );
};
export default Search;
