import styled from "styled-components/native";
import { View } from "../../atoms";

export const TextInputStyled = styled.TextInput`
  height: 40px;
  flex: 1;
  margin-left: ${({ theme }) => theme.spacing.sm};
`

export const Wrapper = styled(View)`
  border-width: 1px;
  border-radius: 2px;
  border-color: ${({ theme }) => theme.colors.grey};
  margin: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.white};
  flex-direction: row;
  align-items: center;
  border-radius: 6px;
`

export const FilterButton = styled.Pressable`
  margin: ${({ theme }) => theme.spacing.sm};
`