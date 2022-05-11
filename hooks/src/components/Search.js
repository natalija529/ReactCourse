import axios from "axios";
import React, { useEffect, useState } from "react";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const f = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };

    const timeoutId = setTimeout(() => {
      if (term) {
        f();
      }
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className=" content">
          <div className="header"> {result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}?`}
          >
            Visit
          </a>
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
