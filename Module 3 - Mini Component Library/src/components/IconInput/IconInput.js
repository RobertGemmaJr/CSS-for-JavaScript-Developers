/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

/** From Tutorial:
 *  https://github.com/css-for-js/mini-component-library/blob/solution/src/components/IconInput/IconInput.js
 * 
 *  Josh changes placeholder to ...props and passes that into his Input
 *  The Wrapper was a label not a form - this means clicking the icon focuses the whole thing. Also means he doesn't need focus-within
 */

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  let Input, iconSize;
  if(size === "small") {
    Input = SmallInput;
    iconSize = 16;
  } else if(size==="large") {
    Input = LargeInput;
    iconSize = 24;
  } else throw new Error(`Invalid IconInput size: ${size}`)

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <StyledIcon id={icon} size={iconSize} />
      <Input
        name="iconInput"
        type="text"
        placeholder={placeholder}
        size={size}
        width={width}
        iconSize={iconSize}
      />
    </Wrapper>
  );
};

const Wrapper = styled.form`
  position: relative;
  width: max-content;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }

  &:focus-within {
    outline: 2px solid;
    outline-offset: 2px;
  }
`

const BaseInput = styled.input`
  color: inherit;
  outline: none;
  border: none;
  border-bottom: ${props => props.size === "small" ? 1 : 2}px solid ${COLORS.black};
  width: ${props => props.width}px;
  font-size: ${props => props.size === "small" ? 0.875 : 1}rem;
  font-weight: 700; 

  &::placeholder {
    color: inherit;
    font-weight: initial;
  }
`

const SmallInput = styled(BaseInput)`
  height: 24px;
  font-size: 14px;
  padding: 4px 4px 4px 24px;
`;

const LargeInput = styled(BaseInput)`
  height: 36px;
  font-size: 18px;
  padding: 8px 8px 8px 36px;
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto;
`;

export default IconInput;
