import React from "react";

import { Container, Banner, Title, RateContainer, Rate } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SearchMovieProps } from "../../pages/Search";
interface SearchItemProps {
  movie: SearchMovieProps;
  goToDetailsPage: (item: SearchMovieProps) => void;
}

const SearchItem: React.FC<SearchItemProps> = ({ movie, goToDetailsPage }) => {

  function detailMovie() {
    if(movie.release_date === "") {
      alert("Filme ainda sem data");
      return;
    }
    goToDetailsPage(movie)
  }

  return (
    <Container onPress={() => goToDetailsPage(movie)}>
      {movie.poster_path ? (
        <Banner
          resizeMethod="resize"
          source={{
            uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}`,
          }}
        />
      ) : (
        <Banner
          resizeMethod="resize"
          resizeMode="cover"
          source={require("../../assets/noimage.png")}
        />
      )}

      <Title>{movie?.title}</Title>

      <RateContainer>
        <Ionicons name={"md-star"} size={12} color="#e7a74e" />
        <Rate>{movie?.vote_average}/10</Rate>
      </RateContainer>
    </Container>
  );
};

export default SearchItem;
