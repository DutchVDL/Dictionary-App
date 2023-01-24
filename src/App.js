import "./App.css";
import Header from "./Header";
import Search from "./Search";
import Word from "./Word";
import React from "react";

function App() {
  const [word, setWord] = React.useState("");
  const getValue = (e) => {
    setWord(e);
  };

  return (
    <div>
      <div className="application">
        <Header />
        <Search getValue={getValue} />
      </div>
      <Word searchWord={word} />
    </div>
  );
}

export default App;
