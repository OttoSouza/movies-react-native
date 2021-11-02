import "react-native-gesture-handler"
import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { Routes } from "./src/routes";
import {NavigationContainer} from "@react-navigation/native"

export default function App() {
  return (
    <NavigationContainer >
      <StatusBar style="light" backgroundColor="black"/>
      <Routes/>
    </NavigationContainer>
  );
}


