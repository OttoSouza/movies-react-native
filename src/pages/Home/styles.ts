import styled from "styled-components/native";
import { Platform } from "react-native";
import {FlatList} from "react-native"


export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #312e38;
  padding: ${Platform.OS === "android" ? 32 : 40}px 0;
`;


export const ActivityIndicatorContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #312e38;
  align-items: center;
  justify-content: center;
  padding: ${Platform.OS === "android" ? 32 : 40}px 0;
`;

export const SearchContainer = styled.View`
flex-direction: row;
  width: 100%;
  height: 48px;
  align-items: center;
  padding-left: 16px;
  margin-bottom: 8px;
`;
export const Input = styled.TextInput`
  width: 85%;
  height: 48px;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 16px;
  background-color: #232129;
  color: #ff9000;
`;
export const SearchButton = styled.TouchableOpacity`
  width: 15%;
  height: 48px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text `
  padding: 20px 16px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`
export const BannerButton = styled.TouchableOpacity `
  padding-bottom: 16px;
`
export const Banner = styled.Image `
  height: 150px;
  border-radius: 8px;
  margin: 0 16px;

`

export const SliderMovie = (styled.FlatList `
  height: 250px;
  padding: 0 16px;
  margin-right: 16px;
` as unknown) as typeof FlatList 
