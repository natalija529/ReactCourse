import React, { useEffect, useRef, useState } from "react";

const Dropdown = ({ options, selected, onSelectedChange, labelSelect }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  const renderedResults = options.map((option) => {
    if (selected.value === option.value) return null;
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  useEffect(() => {
    const onBodyClicked = (event) => {
      if (ref.current.contains(event.target)) return;
      setOpen(false);
    };

    document.addEventListener("click", onBodyClicked);

    return () => {
      document.removeEventListener("click", onBodyClicked);
    };
  }, []);

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{labelSelect}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="drodown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {" "}
            {renderedResults}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
