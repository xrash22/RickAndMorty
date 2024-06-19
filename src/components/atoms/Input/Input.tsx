import React from 'react';
import { FilterButton, TextInputStyled, Wrapper } from './styles';
import { TextInputProps } from 'react-native';
import { Icon } from '../Icon';

export interface InputProps extends TextInputProps {
  onPressIcon?: () => void
}

export const Input: React.FC<InputProps> = ({
  onChangeText,
  onPressIcon,
  ...props
}) => {
  return (
    <Wrapper>
      <Icon width={24} height={24} source={require('../../../assets/search.png')} />
      <TextInputStyled onChangeText={onChangeText} {...props} />
      <FilterButton onPress={onPressIcon}>
        <Icon width={20} height={20} source={require('../../../assets/filter.png')} />
      </FilterButton>
    </Wrapper>
  );
};
