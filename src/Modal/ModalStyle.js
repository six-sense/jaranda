import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: #fff;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export const Wrap = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center', 'column')};
  width: 480px;
`;

export const Header = styled.div`
  position: relative;
  width: 100%;
  height: 2rem;
`;

export const ModalClose = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  cursor: pointer;
`;

export const Contents = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center', 'column')};
  width: 100%;
`;

export const style = {
  Overlay,
  Container,
  Wrap,
  Header,
  ModalClose,
  Contents,
};
