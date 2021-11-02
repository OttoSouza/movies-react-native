import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/core";
import React, { useEffect, useState } from "react";

import { api } from "../../services/api";
import { MoviesProps } from "../Home";
import Stars from "react-native-stars";
import {
  Banner,
  ButtonLink,
  Container,
  Header,
  HeaderButton,
  Title,
  ContainerStars,
  Rate,
  Description,
  ListGenres,
} from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import Genres from "../../components/Genres";
import { Modal } from "react-native";
import ModalLink from "../../components/ModalLink";
import {
  deletarMovie,
  getMyMovies,
  hasMovie,
  saveMyMovie,
} from "../../utils/storage";

export interface DetailProps {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
  overview: string;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
}

const Detail: React.FC = () => {
  const router = useRoute();
  const { goBack } = useNavigation();
  const [openLink, setOpenLink] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [detailMovie, setDetailMovie] = useState<DetailProps>(
    {} as DetailProps
  );
  const movie = router.params as MoviesProps;

  useEffect(() => {
    let isActive = true;
    const ac = new AbortController();

    async function getMovie() {
      const response = await api.get(`/movie/${movie?.id}`, {
        params: {
          api_key: "c960d5b993d8b165c5232b64447d63f8",
          language: "pt-BR",
          page: 1,
        },
      });
      if (isActive) {
        setDetailMovie(response.data);
        const isFavorite = await hasMovie("@mylist", response.data);
        setFavorite(isFavorite);
      }
    }

    if (isActive) {
      getMovie();
    }

    return () => {
      isActive = false;
      ac.abort();
    };
  }, []);

  async function favoreMovie(movie: DetailProps) {
    if (favorite) {
      deletarMovie("@mylist", movie.id);
      setFavorite(false);
      alert("Filme removido");
    } else {
      saveMyMovie("@mylist", movie);
      setFavorite(true);
      alert("Filme salvo");
    }
  }

  return (
    <Container>
      <Header>
        <HeaderButton onPress={() => goBack()}>
          <Feather name="arrow-left" size={28} color="#fff" />
        </HeaderButton>
        <HeaderButton onPress={() => favoreMovie(detailMovie)}>
          {favorite ? (
            <Ionicons name="bookmark" size={28} color="#fff" />
          ) : (
            <Ionicons name="bookmark-outline" size={28} color="#fff" />
          )}
        </HeaderButton>
      </Header>

      <Banner
        resizeMethod="resize"
        source={{
          uri: `https://image.tmdb.org/t/p/original/${detailMovie.poster_path}`,
        }}
      />

      <ButtonLink onPress={() => setOpenLink(true)}>
        <Feather name="link" size={24} color="#fff" />
      </ButtonLink>
      <Title numberOfLines={2}>{detailMovie.title}</Title>

      <ContainerStars>
        <Stars
          default={detailMovie.vote_average}
          count={10}
          half={true}
          starSize={24}
          fullStar={<Ionicons name="md-star" suze={24} color="#e7a74e" />}
          emptyStar={
            <Ionicons name="md-star-outline" suze={24} color="#e7a74e" />
          }
          halfStar={<Ionicons name="md-star-half" suze={24} color="#e7a74e" />}
          disabled={true}
        />

        <Rate>{detailMovie.vote_average}/10</Rate>
      </ContainerStars>
      <ListGenres
        data={detailMovie?.genres}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Genres name={item.name} />}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>Descrição</Title>
        {detailMovie?.overview ? (
          <Description>{detailMovie?.overview}</Description>
        ) : (
          <Description>Sem descrição</Description>
        )}
      </ScrollView>

      <Modal animationType="slide" transparent visible={openLink}>
        <ModalLink
          homepage={detailMovie.homepage}
          title={detailMovie.title}
          closeModal={() => setOpenLink(false)}
        />
      </Modal>
    </Container>
  );
};

export default Detail;
