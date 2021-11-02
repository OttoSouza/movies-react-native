import { FlatList, Platform } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #312e38;
`;

export const AcvtiveContainer = styled.View`
  flex: 1;
  background-color: #312e38;
  align-items: center;
  justify-content: center;
  padding: ${Platform.OS === "android" ? 32 : 40}px 0;
`;

export const ListMovies = styled.FlatList`
  height: 250px;
  padding: 0 16px;
  margin-right: 16px;
` as unknown as typeof FlatList;
