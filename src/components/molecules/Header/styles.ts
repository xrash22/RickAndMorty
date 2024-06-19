import styled from "styled-components/native";
import { View } from "../../atoms";

export const Wrapper = styled(View)`
  border-width: 1px;
  border-radius: 2px;
  border-color: ${({ theme }) => theme.colors.grey};
`