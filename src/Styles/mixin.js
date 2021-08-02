import { css } from 'styled-components';

const flexSet = (
  justify = 'center',
  items = 'center',
  direction = 'row',
) => css`
  display: flex;
  justify-content: ${justify};
  align-items: ${items};
  flex-direction: ${direction};
`;

const mixin = { flexSet };

export default mixin;
