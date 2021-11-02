import { FlatList, Platform } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: #312e38;
  padding: ${Platform.OS === "android" ? 32 : 40}px 0;
`;

export const Header = styled.View`
  z-index: 99;
  position: absolute;
  top: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 16px;
`;
export const HeaderButton = styled.TouchableOpacity`
  width: 46px;
  height: 46px;
  justify-content: center;
  background-color: rgba(49, 46, 56, 0.8);
  border-radius: 23px;
  align-items: center;
`;
export const Banner = styled.Image`
  width: 100%;
  height: 500px;
  border-bottom-left-radius: 70px;
  border-bottom-right-radius: 70px;
`;

export const ButtonLink = styled.TouchableOpacity`
    background-color: #ff9000;
    width: 63px;
    height: 63px;
    border-radius: 35px;
    position: absolute;
    top: 480px;
    right: 15px;
    justify-content: center;
    align-items: center;
    z-index: 99;
`;
export const Title = styled.Text`
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    padding: 8px 14px;
    margin-top: 8px;
`;

export const ContainerStars = styled.View `
    flex-direction: row;
    align-items: center;
    padding: 0 14px;
    justify-content: space-between;

`
export const Rate = styled.Text `
    color: #fff;
    font-weight: bold;
    font-size: 16px;

`

export const ListGenres = (styled.FlatList `
    padding-left: 8px;
    margin: 8px;
    max-height: 35px;
    min-height: 35px;
`as unknown) as typeof FlatList 

export const Description = styled.Text `
    padding: 0 16px 30px 16px;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    text-align: justify;

`