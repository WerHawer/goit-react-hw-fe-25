import React from "react";

const SearchForm = ({ value, onChange, onSubmit }) => (
  <form className="SearchForm" onSubmit={onSubmit}>
    <button type="submit" className="SearchForm-button">
      <span className="SearchForm-button-label">Search</span>
    </button>

    <input
      className="SearchForm-input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      value={value}
      onChange={onChange}
    />
  </form>
);

export default SearchForm;
