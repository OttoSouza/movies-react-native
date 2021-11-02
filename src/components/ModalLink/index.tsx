import Feather from "@expo/vector-icons/Feather";
import React from "react";

import { Text } from "react-native";
import WebView from "react-native-webview";

import { BackButton, Container, Name } from "./styles";

interface ModelLinkProps {
  homepage: string;
  title: string;
  closeModal: () => void;
}

const ModalLink: React.FC<ModelLinkProps> = ({
  homepage,
  title,
  closeModal,
}) => {
  return (
    <>
      <BackButton onPress={closeModal}>
        <Feather name="x" size={24} color="#fff" />
        <Name>{title}</Name>
      </BackButton>
      <WebView source={{ uri: homepage }} />
    </>
  );
};

export default ModalLink;
