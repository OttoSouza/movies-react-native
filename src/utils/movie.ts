// Gerar uma lista ed filmes que eu desejar

export function getListMovies(size: number, originalList: []) {
  let listSizeMovies = [];

  for (let index = 0, x = size; index < x; index++) {
    listSizeMovies.push(originalList[index]);
  }

  return listSizeMovies;
}

// gerar um numero aleatorio com base no tamanho da lista de filmes que eu passar;

export function randomBanner(movies: []) {
  return Math.floor(Math.random() * movies.length);
}
