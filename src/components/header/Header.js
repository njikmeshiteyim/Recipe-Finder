import React from "react";
import "./Header.css";

const Header = (props) => {
  const { search, onInputChange, onSearch } = props;
  return (
    <div className="container">
      <div className="header">
        <h1 className="name">Recipe Finder</h1>
        <div className="search">
          <img src="/icon.png" alt="icon" className="img" onClick={onSearch} />
          <input
            className="input"
            placeholder="Search for Recipe"
            value={search}
            onChange={onInputChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
