import React, { useState } from "react";

const SearchBar = ({ setSearched }) => {
  const [term, setTerm] = useState("");

  const onSubmitForm = (event) => {
    event.preventDefault();
    setSearched(term);
  };

  return (
    <div className="seacrh-bar ui segment">
      <form onSubmit={(e) => onSubmitForm(e)} className="ui form">
        <div className="field">
          <label> Search</label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
