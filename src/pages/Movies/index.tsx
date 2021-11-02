import { useIsFocused, useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";

import { Text } from "react-native";
import FavoriteItem from "../../components/FavoriteItem";
import Header from "../../components/Header";
import { deletarMovie, getMyMovies } from "../../utils/storage";
import { MoviesProps } from "../Home";

import { Container, ListMovies } from "./styles";

const Movies: React.FC = () => {
  const [mylist, setMyList] = useState<MoviesProps[]>([]);
  const { navigate } = useNavigation<any>();
  const isFocused = useIsFocused()
  useEffect(() => {
    let isActive = true;

    async function getMyFavoriteMovies() {
      const result = await getMyMovies("@mylist");

      if (isActive) {
        setMyList(result);
      }
    }
    if (isActive) {
      getMyFavoriteMovies();
    }
    return () => {
      isActive = false;
    };
  }, [isFocused]);

  async function handleDelete(id: number) {
    const result = await deletarMovie("@mylist", id);
    setMyList(result);
  }

  function goToDetails(item: MoviesProps) {
    navigate("Detail", { id: item.id });
  }

  return (
    <Container>
      <Header title="Meus Filmes" />

      <ListMovies
        data={mylist}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <FavoriteItem
            movie={item}
            handleDelete={handleDelete}
            goToDetails={() => goToDetails(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default Movies;
