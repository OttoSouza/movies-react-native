import styled from "styled-components/native";

export const Container = styled.View`
    padding-left: 16px;
    padding-top: 16px;

`;
interface TitleProps  {
    size: number;
}
export const Title = styled.Text<TitleProps>`
  color: #fff;
  font-weight: bold;
  font-size: ${props => props.size}px;
`;

export const RateContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 8px 0;
`;


export const RateTitle = styled.Text`
  color: #fff;
  font-size: 12px;
  padding-left: 4px;
`;
export const ActionContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const DetailButton = styled.TouchableOpacity`
  width: 85%;
  height: 30px;
  background-color: #e72f49;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
`;
export const DeleteButton = styled.TouchableOpacity`
  width: 15%;
  height: 30px;
  justify-content: center;
  align-items: center;
`;
