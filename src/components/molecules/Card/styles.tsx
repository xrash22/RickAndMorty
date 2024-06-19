import styled from "styled-components/native";
import { Text, View } from "../../atoms";

export const Wrapper = styled.TouchableOpacity`
  flex: 1;
  padding-top: ${({ theme }) => theme.spacing.sm};
  border-width: .2px;
  border-color: ${({ theme }) => theme.colors.grey};
  border-radius: 10px;
`

export const ImageStyled = styled.Image`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: ${({ height = 120 }) => (height / 2)}px;
  align-self: center;
`

export const NameText = styled(Text)`
  padding-vertical: ${({ theme }) => theme.spacing.sm};
  padding-horizontal: ${({ theme }) => theme.spacing.sm};
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`