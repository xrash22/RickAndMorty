import styled from "styled-components/native";

export const SaveButton = styled.TouchableOpacity`
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors["blue-2"]};
  ${({ disabled }) => disabled ? 'opacity: .5;' : ''}
`
export const ClearButton = styled.TouchableOpacity`
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.texas};
  ${({ disabled }) => disabled ? 'opacity: .5;' : ''}
`