import React, { useEffect, useState } from "react";

import Feather from "@expo/vector-icons/Feather";
import Header from "../../components/Header";
import {
  Container,
  SearchContainer,
  Input,
  SearchButton,
  Title,
  BannerButton,
  Banner,
  SliderMovie,
  ActivityIndicatorContainer,
} from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import SliderItem from "../../components/SliderItem";
import { api } from "../../services/api";
import { getListMovies, randomBanner } from "../../utils/movie";
import { ActivityIndicator, FlatList, View } from "react-native";
import { useNavigation } from "@react-navigation/core";

export interface MoviesProps {
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

const Home: React.FC = () => {
  const [nowPlating, setNowPlaying] = useState<MoviesProps[]>([]);
  const [popular, setPopular] = useState<MoviesProps[]>([]);
  const [rate, setRate] = useState<MoviesProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState("");
  
  const [bannerMovie, setBannerMovie] = useState<MoviesProps>(
    {} as MoviesProps
  );
  const { navigate } = useNavigation<any>();

  useEffect(() => {
    let isActive = true;
    const ac = new AbortController();
    async function loadingMovies() {
      const [nowPlaying, popular, topRate] = await Promise.all([
        await api.get("/movie/now_playing", {
          params: {
            api_key: "c960d5b993d8b165c5232b64447d63f8",
            language: "pt-BR",
            page: 1,
          },
        }),
        await api.get("/movie/popular", {
          params: {
            api_key: "c960d5b993d8b165c5232b64447d63f8",
            language: "pt-BR",
            page: 1,
          },
        }),
        await api.get("/movie/top_rated", {
          params: {
            api_key: "c960d5b993d8b165c5232b64447d63f8",
            language: "pt-BR",
            page: 1,
          },
        }),
      ]);

      if (isActive) {
        setNowPlaying(getListMovies(10, nowPlaying.data.results));
        setPopular(getListMovies(10, popular.data.results));
        setRate(getListMovies(10, topRate.data.results));

        setBannerMovie(
          nowPlaying.data.results[randomBanner(nowPlaying.data.results)]
        );
      }

      setLoading(false);
    }
    loadingMovies();

    return () => {
      isActive = false;
      ac.abort();
    };
  }, []);

  function handleSearchMovie() {
    if(input === ""){
      alert("Pesquisa esta em branco");
      return;
    }
    navigate("Search", {name: input})
    setInput("")
  }

  function goToDetailPage(movie: MoviesProps) {
    navigate("Detail", { id: movie.id });
  }

  if (loading) {
    return (
      <ActivityIndicatorContainer>
        <ActivityIndicator size="large" color="#fff" />
      </ActivityIndicatorContainer>
    );
  }

  return (
    <Container>
      <Header title="My movies" />

      <SearchContainer>
        <Input placeholder="Iron Man" placeholderTextColor="#666360" value={input} onChangeText={setInput}/>

        <SearchButton onPress={handleSearchMovie}>
          <Feather name="search" size={24} color="#fff" />
        </SearchButton>
      </SearchContainer>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>Em Cartaz</Title>

        <BannerButton
          activeOpacity={0.7}
          onPress={() => goToDetailPage(bannerMovie)}
        >
          <Banner
            resizeMethod="resize"
            source={{
              uri: `https://image.tmdb.org/t/p/original/${bannerMovie.poster_path}`,
            }}
          />
        </BannerButton>

        <SliderMovie
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={nowPlating}
          renderItem={({ item }) => (
            <SliderItem
              movie={item}
              navigateDetailPage={() => goToDetailPage(item)}
            />
          )}
          keyExtractor={(item) => String(item.id)}
        />

        <Title>Populares</Title>

        <SliderMovie
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={popular}
          renderItem={({ item }) => (
            <SliderItem
              movie={item}
              navigateDetailPage={() => goToDetailPage(item)}
            />
          )}
          keyExtractor={(item) => String(item.id)}
        />

        <Title>Mais votados</Title>

        <SliderMovie
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={rate}
          renderItem={({ item }) => (
            <SliderItem
              movie={item}
              navigateDetailPage={() => goToDetailPage(item)}
            />
          )}
          keyExtractor={(item) => String(item.id)}
        />
      </ScrollView>
    </Container>
  );
};

export default Home;
