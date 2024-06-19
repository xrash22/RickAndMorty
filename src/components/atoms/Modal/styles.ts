import styled from 'styled-components/native';
import { View } from '../View';

export const Overlay = styled(View)`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.black};
  opacity: 0.5;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Wrapper = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Container = styled(View)`
  width: 90%;
  height: 85%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  padding: ${({ theme }) => theme.spacing.xxl};
`;

export const ModalHeader = styled(View)`
  flex-direction: row;
  justify-content: flex-end;
`;

export const CloseButton = styled.TouchableOpacity`
  align-self: end;
  border-radius: 16px;
  border: 1px;
  padding: ${({ theme }) => theme.spacing.xs};
  border-color: ${({ theme }) => theme.colors['grey-1']};
`;
