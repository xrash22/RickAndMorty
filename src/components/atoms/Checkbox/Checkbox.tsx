import React, { useState } from 'react';
import { CheckboxContainer, CheckboxImage, CheckboxLabel } from './styles';

interface CheckboxPros {
  handleToggle?: () => void;
  checked?: boolean;
  label?: string;
}

export const Checkbox: React.FC<CheckboxPros> = ({
  handleToggle,
  checked,
  label,
}) => {
  return (
    <CheckboxContainer testID="checkboxContainer" onPress={handleToggle}>
      {checked ? (
        <CheckboxImage
          testID="checkedCheckbox"
          source={require('../../../assets/checked.png')}
        />
      ) : (
        <CheckboxImage
          testID="uncheckedCheckbox"
          source={require('../../../assets/unchecked.png')}
        />
      )}
      {label && <CheckboxLabel>{label}</CheckboxLabel>}
    </CheckboxContainer>
  );
};
