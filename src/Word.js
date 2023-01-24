import React, { useEffect } from "react";

export default function Word(props) {
  const [word, setWord] = React.useState("");
  const [definition, setDefinition] = React.useState("");
  const [synonym, setSynonym] = React.useState("");

  useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${props.searchWord}`)
      .then((response) => response.json())
      .then((data) => {
        const { meanings } = data[0];

        setWord(meanings[0].partOfSpeech);

        setSynonym(meanings[0].synonyms);

        setDefinition(meanings[0].definitions);
      });
  }, [props]);

  const synonymArr = synonym
    ? synonym.map((syn, i) => {
        return <p key={i}>{syn}</p>;
      })
    : "";

  const definitionArr = definition
    ? definition.map((def) => {
        return <li>{def.definition}</li>;
      })
    : "";

  return (
    <div className={word ? "word-name" : ""}>
      {word && <p className="figure-of-speech">Word - {word}</p>}
      {synonymArr && (
        <p className="synonyms">
          <span className="boldName">Synonym(s) -</span> {synonymArr}
        </p>
      )}
      {definitionArr && (
        <ul className="definitions">
          <span className="boldName">Definition(s) - </span> {definitionArr}
        </ul>
      )}
    </div>
  );
}
