import React, { useState, useEffect } from "react";
import "./App.css";
import Logo from "./components/navbar/Logo";
import Navigation from "./components/navbar/Navigation";
import UserProfile from "./components/navbar/UserProfile";
import Search from "./components/navbar/Search";
import Home from "./components/home/home";
import Mylist from "./components/mylist/Mylist";
import Toppick from "./components/toppick/Toppick";
import Recent from "./components/recent/Recent";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [randomNumbers, setrandomNumbers] = useState(10);
  const [myList, setMyList] = useState(null);

  var randomNumber = () => {
    setrandomNumbers(Math.floor(Math.random() * 10 + 1));
  };

  useEffect(() => {
    randomNumber();
  }, [randomNumbers]);

  const handleCall = (searchValue) => {
    setSearchTerm(`search/multi?query=${searchValue}`);
  };

  const handleHome = (array) => {
    setMyList(array);
  };

  localStorage.setItem("myList", JSON.stringify(myList));

  const scrollRef = React.useRef(null);

  return (
    <div>
      <header className="Header">
        <Logo />
        <Navigation />
        <Search searchCall={handleCall} scrollRef={scrollRef} />
        <UserProfile />
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              searchTerm={searchTerm}
              scrollRef={scrollRef}
              randomNumbers={randomNumbers}
              appCall={handleHome}
            />
          }
        ></Route>
        <Route path="/mylist" element={<Mylist myList={myList} />}></Route>
        <Route
          path="/toppick"
          element={<Toppick randomNumbers={randomNumbers} />}
        ></Route>
        <Route
          path="/recent"
          element={<Recent searchTerm={searchTerm} />}
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
