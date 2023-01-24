import React from "react";

export default function Search(props) {
  const [value, setValue] = React.useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setValue(value);
    console.log(value);
    props.getValue(value);
  };

  const changeValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <form className="search">
      <input
        type="text"
        placeholder="type a word"
        id="search-word"
        onChange={changeValue}
        value={value}
      ></input>
      <button id="btn" onClick={handleClick}>
        Search
      </button>
    </form>
  );
}
