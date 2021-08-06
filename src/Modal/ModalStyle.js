import styled from 'styled-components/macro';

export const Overlay = styled.div`
  ${({ theme }) => theme.flexSet()};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const Container = styled.div`
  ${({ theme }) => theme.flexSet()};
  width: 480px;
  height: 400px;
  z-index: 1;
`;

export const Wrap = styled.div`
  ${({ theme }) => theme.flexSet('flex-start', 'center', 'column')};
  position: absolute;
  width: ${({ accountStyle }) => (accountStyle ? '520px' : '480px')};
  height: ${({ accountStyle }) => (accountStyle ? '80vh' : '')};
  border-radius: 6px;
  background-color: #fff;
  overflow-y: scroll;
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
