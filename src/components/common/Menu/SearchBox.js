import React, { useState } from "react";

const SearchBox = ({ setToggleSearch }) => {
  const [searchText, setSearchText] = useState("");
  const searchSubmit = (e) => {
    e.preventDefault();
    setSearchText("");
    setToggleSearch(false);
    console.log(searchText);
  };
  return (
    <>
      <div className="header_search-open">
        <button className="button-search-toggle">
          <i
            className="header_search-close text-white far fa-times"
            onClick={() => setToggleSearch(false)}
          />
        </button>
        <div className="tp-search-form p-relative ">
          <form onSubmit={searchSubmit}>
            <input
              type="text"
              placeholder="Search ..."
              name="text"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button type="submit" className="search-submit-icon">
              <i className="far fa-search" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchBox;
