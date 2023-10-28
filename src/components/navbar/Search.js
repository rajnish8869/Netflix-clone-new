import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);
  const [searchFocus, setSearchFocus] = useState(false);
  const apiKey = "a4e58d56fe8690c89ebed28c6816ff3f";

  let navigate = useNavigate();

  useEffect(() => {
    var requestUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchValue}`;

    fetch(requestUrl)
      .then((response) => {
        return response.json();
      })
      .then((datas) => {
        setData(
          datas?.results.filter((e) => {
            return e.original_title
              .toLowerCase()
              .includes(searchValue.toLowerCase());
          })
        );
      })
      .catch((err) => {
        console.log("There has been an error", err);
      });
  }, [searchValue]);

  const onTrigger = (event) => {
    // setSearchValue("");
    setSearchFocus(false);
    props.searchCall(event);
    navigate("/");
    props.scrollRef.current.scrollIntoView({
      block: "end",
      behavior: "smooth",
    });
  };

  const onSubmit = (event) => {
    props.searchCall(event.target.search.value);
    navigate("/");
    if (event.target.search.value != "") {
      props.scrollRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
    setSearchFocus(false);
    event.preventDefault();
  };

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div id="search" className="Search">
      <form onSubmit={onSubmit} className="form-data">
        <input
          type="text"
          placeholder="Search for a title..."
          name="search"
          onChange={handleSearch}
          onFocus={() => setSearchFocus(true)}
          className="inputSearch"
        />
        <input type="submit" className="submit" value="Search" />
      </form>
      <div
        className="movieShow"
        style={{
          display: searchFocus == false ? "none" : "block",
        }}
      >
        {data?.map((e) => {
          return (
            <p
              style={{ cursor: "pointer" }}
              onClick={() => onTrigger(e.original_title)}
              key={e.id}
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
