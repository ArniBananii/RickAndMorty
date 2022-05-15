const getCharacters = async (page) => {
  try {
    const request = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    );
    const response = await request.json();
    return response;
  } catch (e) {
    console.log(e);
  }
};

export default getCharacters;
