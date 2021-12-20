/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

/** From Tutorial:
 *  https://github.com/css-for-js/mini-component-library/blob/solution/src/components/IconInput/IconInput.js
 * 
 *  
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
    <Wrapper >
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
  display: black;
  color: ${COLORS.gray700};
  border-bottom: 2px solid ${COLORS.black};
  width: max-content;

  &:hover {
    color: ${COLORS.black};
  }

  &:focus-within {
    outline: 2px solid ${props => props.focusColor};
  }
`

const BaseInput = styled.input`
  color: inherit;
  background-color: inherit;
  outline: none;
  border: none;
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
