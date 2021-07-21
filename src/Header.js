import React, { useState, useEffect } from "react";
import "./Header.css";
import {
  Menu,
  Search,
  VideoCall,
  Notifications,
  Apps,
  Mic,
} from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
  const [seed, setSeed] = useState();

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <Menu />
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/300px-YouTube_Logo_2017.svg.png"
            alt=""
            className="header__logo"
          />
        </Link>
      </div>
      <div className="header__middle">
        <input
          type="text"
          placeholder="Search"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <Link to={`/search/:${inputSearch}`}>
          <Search className="header__middleSearch" />
        </Link>
        <Mic className="header__middleMic" />
      </div>
      <div className="header__right">
        <VideoCall />
        <Apps />
        <Notifications />
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      </div>
    </div>
  );
}

export default Header;
