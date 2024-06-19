import styled from "styled-components/native";
import { theme } from "../../../themes";

interface ViewProps {
  flex?: boolean
  itemsCenter?: boolean
  row?: boolean
  spaceBetween?: boolean
  itemsEnd?: boolean
  background?: keyof typeof theme.colors
}

export const View = styled.View<ViewProps>`
  background-color: ${({ background = 'transparent' }) => background};
  ${({ flex }) => flex ? 'flex: 1;' : ''}
  ${({ itemsCenter }) => itemsCenter ? 'align-items: center;' : ''}
  ${({ row }) => row ? 'flex-direction: row;' : ''}
  ${({ spaceBetween }) => spaceBetween ? 'justify-content: space-between;' : ''}
  ${({ itemsEnd }) => itemsEnd ? 'align-items: flex-end;' : ''}
`