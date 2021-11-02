import React from "react";
import { Feather } from "@expo/vector-icons";

import { Container, MenuButton, Title } from "./styles";
import { useNavigation, DrawerActions } from "@react-navigation/native";


interface HeaderProsp {
  title: string;
}

const Header: React.FC<HeaderProsp> = ({title}) => {
  const navigation = useNavigation();

  function toggleDrawer(): void {
    navigation.dispatch(DrawerActions.toggleDrawer());
  }

  return (
    <Container>
      <MenuButton onPress={toggleDrawer}>
        <Feather name="menu" size={32} color="#ff9000" />
      </MenuButton>
      <Title>{title}</Title>
    </Container>
  );
};

export default Header;
