import styled from "styled-components";

function App() {
  return (
    <div>
      <Hello>안녕하세요</Hello>
    </div>
  );
}

export default App;

const Hello = styled.div`
  ${({ theme }) => theme.flexSet()};
`;
