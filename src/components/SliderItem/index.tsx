import React from "react";

import { Ionicons } from "@expo/vector-icons";
import {
  Container,
  BannerItem,
  RateContainer,
  RateTitle,
  Title,
} from "./styles";
import { MoviesProps } from "../../pages/Home";

interface SliderItemProps {
  movie: MoviesProps;
  navigateDetailPage: (movie: MoviesProps) => void;
}

const SliderItem: React.FC<SliderItemProps> = ({ movie, navigateDetailPage }) => {
  return (
    <Container activeOpacity={0.7} onPress={() => navigateDetailPage(movie)}>
      <BannerItem
        resizeMethod="resize"
        source={{
          uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}`,
        }}
      />

      <Title numberOfLines={1}>{movie.title}</Title>

      <RateContainer>
        <Ionicons name="md-star" size={12} color="#e7a74e" />
        <RateTitle>{movie.vote_average}</RateTitle>
      </RateContainer>
    </Container>
  );
};

export default SliderItem;
