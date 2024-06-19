import React, { memo } from 'react';
import { ImageStyled, NameText, Wrapper } from './styles';
import { SCREEN_NAMES } from '../../../router';
import { useNavigation } from '../../../hooks';
import { Character } from '../../../services/types';

interface CardProps extends Character { }

export const Card: React.FC<CardProps> = memo(character => {
  const navigation = useNavigation();
  return (
    <Wrapper
      onPress={() =>
        navigation.navigate(SCREEN_NAMES.CHARACTER_DETAILS, { character })
      }>
      <ImageStyled
        width={120}
        height={120}
        resizeMode="cover"
        source={{ uri: character.image }}
      />
      <NameText>{character.name}</NameText>
    </Wrapper>
  );
});
