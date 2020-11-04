import React from "react";

const Search = ({ onSearch }) => {
  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search..."
        onChange={onSearch}
      />
    </div>
  );
};

export default Search;
