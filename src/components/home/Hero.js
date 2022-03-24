import React from "react";
import HeroButton from "./HeroButton";

const Hero = () => {
  return (
    <div id="hero" className="Hero">
      <div className="content">
        <img
          className="logo"
          src="https://www.seekpng.com/png/detail/106-1060901_version-john-wick-movie-logo.png"
          alt="Version - John Wick Movie"
        />
        <h2>John Wick: Chapter 3 – Parabellum</h2>
        <p>
          John Wick is on the run after killing a member of the international
          assassins' guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </p>
        <div className="button-wrapper">
          <HeroButton primary={true} text="Watch now" />
          <HeroButton primary={false} text="+ My list" />
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default Hero;
