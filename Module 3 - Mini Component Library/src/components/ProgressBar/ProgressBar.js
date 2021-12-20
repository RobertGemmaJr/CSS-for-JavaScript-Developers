/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const outerHeights = { small: 8, medium: 12, large: 24}
const innerHeights = { small: 8, medium: 12, large: 16}

// TODO: Round corners as approaching 100%
// TODO: Subtract margin from large ProgressBar

const ProgressBar = ({ value, size }) => {
  // Validate value
  if(value < 0) {
    console.error("ProgressBar value must be between 0 and 100, received", value)
    value = 0
  } else if(value > 100) {
    console.error("ProgressBar value must be between 0 and 100, received", value)
    value = 100
  }

  // Validate size
  if(size !== "small" && size !== "medium" && size !== "large") {
    console.error("Invalid size prop:", size)
    size="medium"
  }


  const margin = size === "large" ? 4 : 0

  return (
    <BaseProgressBar size={size}>
      <BaseInnerBar value={value} size={size} margin={margin} />
      <VisuallyHidden>{"Progress bar is " + value + "% complete"}</VisuallyHidden>
    </BaseProgressBar>
  )
};

const BaseProgressBar = styled.div`
  position: absolute;
  width: 370px;
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 8px;

  height: ${props => outerHeights[props.size]}px;
`

const BaseInnerBar = styled.div`
  position: absolute;
  background: #4747EB;
  border-radius: 4px 0px 0px 4px;

  width: ${props => props.value}%;
  top: ${props => props.margin}px;
  bottom: ${props => props.margin}px;
  left: ${props => props.margin}px;
`

export default ProgressBar;
