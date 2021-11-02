import React from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Search from "../pages/Search";

const Stack = createNativeStackNavigator();

const StackRoutes: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{
        headerShown: false
      }} />
       <Stack.Screen name="Detail" component={Detail} options={{
        headerShown: false,
        title: "Detalhes"
      }} />
       <Stack.Screen name="Search" component={Search} options={{
        title: "Sua busca",
        headerTintColor: "#fff",
        headerTitleStyle: {
          color: "#fff"
        },
        headerStyle: {
          backgroundColor: "#312e38",
        }
      }} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
