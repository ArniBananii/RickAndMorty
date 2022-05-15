import React, { useState, useEffect } from "react";
import getCharacters from "./getCharacters";

const RickAndMorty = () => {
  const [searchQuery, setSearchQuery] = useState(""); // called state initialized
  const [characters, setCharacters] = useState(undefined);
  const [currentPage, setCurrentPage] = useState(1);

  const setCharactersData = async (page) => {
    setCurrentPage(page)
    const dataRequest = await getCharacters(page);
    setCharacters(dataRequest.results);
  };

  useEffect(() => {
    setCharactersData(1);
  }, []);

  return (
    <div>
      <input
        onChange={(event) => {
          setSearchQuery(event.target.value);
        }}
      ></input>
      <div>
        {characters !== undefined ? (
          characters
            .filter((character) =>
              character.name
                .toLocaleLowerCase()
                .includes(searchQuery.toLocaleLowerCase())
            )
            .map((character) => (
              <img src={character.image} alt={character.name}></img>
            ))
        ) : (
          <p>loading</p>
        )}
      </div>
      <div style={{display:"inline", backgroundColor: "red" }} onClick={() => setCharactersData(currentPage + 1)}>next Page</div>
      <div style={{display:"inline", backgroundColor: "blue" }} onClick={() => {
        if (currentPage > 1) {
          setCharactersData(currentPage - 1)
        }  
      }}>previous Page</div>
    </div>
  );
};

export default RickAndMorty;
