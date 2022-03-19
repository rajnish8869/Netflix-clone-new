import React, { useState } from "react";
import "./App.css";
import TitleList from "./components/TitleList";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import UserProfile from "./components/UserProfile";
import Hero from "./components/Hero";
import Search from "./components/Search";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const randomNumber = () => {
    return Math.floor(Math.random() * 10 + 1);
  };

  const handleCall = (searchValue) => {
    setSearchTerm(`search/multi?query=${searchValue}`);
    console.log("searchValueNew", searchValue);
  };
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
        url={`discover/tv?sort_by=popularity.desc&page=${randomNumber()}`}
      />
      <TitleList
        title="Trending now"
        url={`discover/movie?sort_by=popularity.desc&page=${randomNumber()}`}
      />
      <TitleList
        title="Comedy magic"
        url={`genre/35/movies?sort_by=popularity.desc&page=${randomNumber()}`}
      />
      <TitleList
        title="Sci-Fi greats"
        url={`genre/878/movies?sort_by=popularity.desc&page=${randomNumber()}`}
      />
      <TitleList
        title="Most watched in Horror"
        url={`genre/27/movies?sort_by=popularity.desc&page=${randomNumber()}`}
      />
    </div>
  );
};

export default App;
