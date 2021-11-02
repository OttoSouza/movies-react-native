import { useNavigation, useRoute } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import SearchItem from "../../components/SearchItem";
import { api } from "../../services/api";

import { AcvtiveContainer, Container, ListMovies } from "./styles";

interface SearchProps {
  name: string;
}

export interface SearchMovieProps {
  id: string;
  poster_path: string;
  title: string;
  vote_average: number;
  release_date: string;
}

const Search: React.FC = () => {
  const { navigate } = useNavigation<any>();
  const [movie, setMovie] = useState<SearchMovieProps[]>([]);
  const [loading, setLoading] = useState(true);
  const { params } = useRoute();
  const searchInput = params as SearchProps;
  useEffect(() => {
    let isActive = true;

    async function getSearchMovie() {
      const response = await api.get("/search/movie", {
        params: {
          query: searchInput?.name,
          api_key: "c960d5b993d8b165c5232b64447d63f8",
          language: "pt-BR",
          page: 1,
        },
      });

      if (isActive) {
        setMovie(response.data.results);
        console.log(response.data.results);
        setLoading(false);
      }
    }

    if (isActive) {
      getSearchMovie();
    }

    return () => {
      isActive = false;
    };
  }, []);

  function goToDetailsPage(movie: SearchMovieProps) {
    navigate("Detail", { id: movie.id });
  }

  if (loading) {
    return (
      <AcvtiveContainer>
        <ActivityIndicator size="large" color="#fff" />
      </AcvtiveContainer>
    );
  }
  return (
    <Container>
      <ListMovies
        data={movie}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <SearchItem movie={item} goToDetailsPage={goToDetailsPage} />
        )}
      />
    </Container>
  );
};

export default Search;
