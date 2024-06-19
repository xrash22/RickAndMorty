import React, { PropsWithChildren, forwardRef, useImperativeHandle, useState } from 'react';
import { Modal as ModalRN } from 'react-native';
import { CloseButton, Container, ModalHeader, Overlay, Wrapper } from './styles';
import { Icon } from '../Icon';

export type ModalRef = {
  openModal: () => void;
  closeModal: () => void;
};

export interface ModalProps extends PropsWithChildren {
  title?: string
}

export const Modal = forwardRef<ModalRef, ModalProps>(({ title, children }, ref) => {
  const [visible, setVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    openModal: () => setVisible(true),
    closeModal: () => setVisible(false),
  }));

  return (
    <ModalRN visible={visible} animationType="slide" transparent>
      <Wrapper>
        <Overlay />
        <Container>
          <ModalHeader>
            <CloseButton onPress={() => setVisible(false)}>
              <Icon width={20} height={20} source={require('../../../assets/close.png')} />
            </CloseButton>
          </ModalHeader>
          {children}
        </Container>
      </Wrapper>
    </ModalRN>
  );
});
