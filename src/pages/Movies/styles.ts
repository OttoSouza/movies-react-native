import { FlatList, Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #312e38;
  padding: ${Platform.OS === "android" ? 32 : 40}px 0;
`;

export const ListMovies = (styled.FlatList`

` as unknown) as typeof FlatList 
