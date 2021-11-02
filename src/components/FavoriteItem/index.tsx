import { Ionicons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import React from "react";

import { Text } from "react-native";
import { MoviesProps } from "../../pages/Home";
import { deletarMovie } from "../../utils/storage";

import {
  Container,
  Title,
  RateContainer,
  RateTitle,
  ActionContainer,
  DetailButton,
  DeleteButton,
} from "./styles";

interface FavoriteItemProps {
  movie: MoviesProps;
  handleDelete: (id: number) => Promise<void>;
  goToDetails: (item: MoviesProps) => void;
}

const FavoriteItem: React.FC<FavoriteItemProps> = ({ movie, handleDelete, goToDetails }) => {
  const { navigate } = useNavigation<any>();

 

  return (
    <Container>
      <Title size={16}>{movie.title}</Title>

      <RateContainer>
        <Ionicons name="md-star" size={12} color="#e7a74e" />
        <RateTitle>{movie.vote_average}/10</RateTitle>
      </RateContainer>

      <ActionContainer>
        <DetailButton onPress={() => goToDetails(movie)}>
          <Title size={12}>Ver detalhe</Title>
        </DetailButton>

        <DeleteButton onPress={() => handleDelete(movie.id)}>
          <Feather name="trash" size={24} color="#fff" />
        </DeleteButton>
      </ActionContainer>
    </Container>
  );
};

export default FavoriteItem;
