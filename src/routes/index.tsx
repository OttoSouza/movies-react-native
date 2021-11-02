import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import Movies from "../pages/Movies";
import StackRoutes from "./stack_routes";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Drawer = createDrawerNavigator();

export const Routes = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false, // Retirar o Header padrao do IOS ou Android
        drawerStyle: {
          backgroundColor: "#312E38", // Cor de fundo do drawer
          paddingTop: 20, // colocar espaçamento
        },
        drawerActiveBackgroundColor: "#ff9000", // Cor do item do menu
        drawerActiveTintColor: "#fff", // Cor do texto quando tiver ativo do menu
        drawerInactiveTintColor: "#fff", // Cor do texto quando tiver inativo do menu
      }}
    >
      <Drawer.Screen
        name="HomeDrawer"
        component={StackRoutes}
        options={{
          title: "Home", // mudar o titulo de cada item do menu.
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name={focused ? "movie-open" : "movie-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Movies"
        component={Movies}
        options={{
          title: "My Movies",
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name={focused ? "archive" : "archive-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
