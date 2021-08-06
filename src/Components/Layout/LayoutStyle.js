import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => theme.flexSet('', 'center', 'column')};
  height: 100vh;
`;

export const Contents = styled.div`
  ${({ theme }) => theme.flexSet('', 'center')};
  flex: 1;
`;
