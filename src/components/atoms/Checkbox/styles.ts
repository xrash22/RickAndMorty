import styled from "styled-components/native";
import { Text } from "../Text";

export const CheckboxContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`

export const CheckboxLabel = styled(Text)`
  margin-left: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.black};
`

export const CheckboxImage = styled.Image`
  width: 24px;
  height: 24px;
`