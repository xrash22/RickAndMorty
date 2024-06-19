import React from 'react';
import { Input, View } from '../../atoms';

interface HeaderProps {
  onPressFilter?: () => void;
  onChangeText?: (text: string) => void;
  value?: string
}

export const Header: React.FC<HeaderProps> = ({
  onPressFilter,
  onChangeText,
  value
}) => {
  return (
    <View>
      <Input
        value={value}
        onChangeText={onChangeText}
        placeholder="Write a name..."
        onPressIcon={onPressFilter}
      />
    </View>
  );
};
