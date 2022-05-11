import axios from "axios";
import React, { useEffect, useState } from "react";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      if (term) {
        setResults(data.query.search);
      }
    })();
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.oageid} className="item">
        <div className=" content">
          <div className="header"> {result.title}</div>
          {result.snippet}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className=" ui form">
        <div className=" field">
          <label> Search:</label>
          <input
            value={term}
            className=" input"
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
