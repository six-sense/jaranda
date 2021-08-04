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
  top: 20%;
  left: 50%;
  background-color: #00000060;
  border-radius:20px;
  transform: translate(-50%, -50%);
  z-index: 1;
`;
export const Wrap = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center', 'column')};
  width: auto;
  margin-left:10px;
  margin-right:10px;
`;
export const Header = styled.div`
  position: relative;
  width: 100%;
  height:1.5rem;
  font-size:13px;
  display:flex;
  align-items:center;
  
`;
export const Contents = styled.div`
    width:100%;
    text-align:center;
    font-size:13px;
    color:#FFFFFF;
`;
export const style = {
    Overlay,
    Container,
    Wrap,
    Header,
    Contents,
  };