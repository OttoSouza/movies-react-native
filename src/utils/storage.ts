import { DetailProps } from "./../pages/Detail/index";
import AsyncStorage from "@react-native-async-storage/async-storage";

// buscar os items salvos
export async function getMyMovies(key: string) {
  const myMovies = await AsyncStorage.getItem(key);

  let movies = (JSON.parse(myMovies) as DetailProps[]) || [];
  return movies;
}
// salvar um novo filme

export async function saveMyMovie(key: string, newMovie: DetailProps) {
  const moviesStoraged = await getMyMovies(key);

  const hasMovie = moviesStoraged.some((item) => item.id === newMovie.id);

  if (hasMovie) {
    alert("Esse filme ja esta na lista de favoritos")
    return;
  }

  moviesStoraged.push(newMovie);

  await AsyncStorage.setItem(key, JSON.stringify(moviesStoraged));
}

// deletar
export async function deletarMovie(key: string, id: number) {
  const moviesStoraged = await getMyMovies(key);
  let deleteMovies = moviesStoraged.filter((item) => item.id !== id);
  await AsyncStorage.setItem(key, JSON.stringify(deleteMovies));
  return deleteMovies;
}
// filtrar

export async function hasMovie(key: string, movie: DetailProps) {
  const movies = await getMyMovies(key);
  const hasMovie = movies.find((item) => item.id === movie.id);

  if (hasMovie) {
    return true;
  }
  return false;
}
