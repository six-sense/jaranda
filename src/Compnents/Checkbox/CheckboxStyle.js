import styled from 'styled-components';
export const Container = styled.div`
    display: contents;
    vertical-align:middle;
    pad
`
export const Icon = styled.svg`
    fill:none;
    stroke: white;
    stroke-width:2px;
`

export const CheckBox = styled.div`
    cursor:pointer;
    display:inline-block;
    width:20px;
    height:20px;
    border:${(props) => (props.checked ? 'none' : 'solid 0.1rem #dddddd')};
    background:${(props) => (props.checked ? 'skyblue' : 'white')};
    border-radius:5px;
    margin-right:10px;
    transition: all 150ms;
    ${Icon}{
        visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
    }
`
export const HiddenCheckBox = styled.input`
    border:0;
    clip: rect(0 0 0 0);
    clippatch: inset(50%);
    height:1px;
    margin: -1px;
    overflow:hidden;
    padding:0;
    position: absolute;
    white-space: nowrap;
    width:1px;
`
export const style = {
    Container,
    Icon,
    CheckBox,
    HiddenCheckBox,
  };