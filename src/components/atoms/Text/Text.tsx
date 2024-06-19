import styled from 'styled-components/native';
import { theme } from '../../../themes';

interface TextProps {
  textColor?: keyof typeof theme.colors;
  fontSize?: keyof typeof theme.fontSize;
  bold?: boolean
  center?: boolean
}

export const Text = styled.Text<TextProps>`
  color: ${({ textColor = theme.colors.white }) => textColor};
  font-size: ${({ fontSize = 'md' }) => theme.fontSize[fontSize]};
  ${({ bold }) => bold ? 'font-weight: bold;' : ''}
  ${({ center }) => center ? 'text-align: center;' : ''}
`;
