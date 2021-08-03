import styled from 'styled-components';


export const Container = styled.div`
  ${({ theme }) => theme.flexSet()};
  height: 100vh;
`;