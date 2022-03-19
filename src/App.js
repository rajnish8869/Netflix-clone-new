import React, { useState, useEffect } from "react";
import "./App.css";
import TitleList from "./components/TitleList";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import UserProfile from "./components/UserProfile";
import Hero from "./components/Hero";
import Search from "./components/Search";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [randomNumbers, setrandomNumbers] = useState(10);

  var randomNumber = () => {
    setrandomNumbers(Math.floor(Math.random() * 10 + 1));
  };

  useEffect(() => {
    randomNumber();
  }, []);

  const handleCall = (searchValue) => {
    setSearchTerm(`search/multi?query=${searchValue}`);
    // console.log("searchValueNew", searchValue);
  };

  console.log("randomNumber", randomNumbers);
  return (
    <div>
      <header className="Header">
        <Logo />
        <Navigation />
        <Search searchCall={handleCall} />
        <UserProfile />
      </header>
      <Hero />
      <TitleList title="Search Results" url={searchTerm} />
      <TitleList
        title="Top TV picks for Rajnish"
        url={`discover/tv?sort_by=popularity.desc&page=${randomNumbers}`}
      />
      <TitleList
        title="Trending now"
        url={`discover/movie?sort_by=popularity.desc&page=${randomNumbers}`}
      />
      <TitleList
        title="Comedy magic"
        url={`genre/35/movies?sort_by=popularity.desc&page=${randomNumbers}`}
      />
      <TitleList
        title="Sci-Fi greats"
        url={`genre/878/movies?sort_by=popularity.desc&page=${randomNumbers}`}
      />
      <TitleList
        title="Most watched in Horror"
        url={`genre/27/movies?sort_by=popularity.desc&page=${randomNumbers}`}
      />
    </div>
  );
};

export default App;
