import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
const Search = (props) => {
  const [filterValue, setFilterValue] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const [data, setData] = useState([]);
  const apiKey = "a4e58d56fe8690c89ebed28c6816ff3f";

  let navigate = useNavigate();

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
    navigate("/");
    props.scrollRef.current.scrollIntoView({ behavior: "smooth" });

    // event.preventDefault();
  };

  const onSubmit = (event) => {
    props.searchCall(event.target.search.value);
    setFilterValue([]);
    navigate("/");
    if (event.target.search.value != "") {
      props.scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
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
    <div id="search" className="Search">
      <form onSubmit={onSubmit} className="form-data">
        <input
          type="search"
          placeholder="Search for a title..."
          name="search"
          onChange={handleSearch}
        />
        <input type="submit" className="submit" value="Search" />
      </form>
      {filterValue.length != 0 && searchValue !== "" && (
        <div
          className=" movieShow"
          style={{
            display: searchValue == "" ? "none" : "block",
          }}
        >
          {filterValue.map((e) => {
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
      )}
    </div>
  );
};
export default Search;
