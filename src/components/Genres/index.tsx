import React from 'react';

import { Text } from 'react-native';

import { Container, GenresName } from './styles';

interface GenresProps {
  name: string;
}

const Genres: React.FC<GenresProps> = ({name}) => {
  return (
    <Container>
      <GenresName>{name}</GenresName>
    </Container>
  );
};

export default Genres;
