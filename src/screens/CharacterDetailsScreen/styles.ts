import styled from "styled-components/native";
import { View } from "../../components";

interface PressableStyledProps {
  showEpisodes?: boolean
}

export const PressableStyled = styled.Pressable<PressableStyledProps>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors["blue-1"]};
  padding-vertical: ${({ theme }) => theme.spacing.xs};
  padding-left: ${({ theme }) => theme.spacing.xs};
  padding-horizontal: ${({ theme }) => theme.spacing.xs};
  border-color:  ${({ theme }) => theme.colors['blue-2']};
  flex-direction: row;
  justify-content: space-between;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`
export const CollapseView = styled(View)`
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: ${({ theme }) => theme.colors['blue-1']};
  padding-horizontal: ${({ theme }) => theme.spacing.sm};
  padding-top: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`
