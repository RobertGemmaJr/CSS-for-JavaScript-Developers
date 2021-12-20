/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

// TODO: Round corners as approaching 100%
const ProgressBar = ({ value, size }) => {
  // Validate size
  let OuterBar;
  if(size === "small") OuterBar = SmallProgressBar;
  else if(size === "medium") OuterBar = MediumProgressBar;
  else if(size === "large") OuterBar = LargeProgressBar;
  else throw new Error(`Invalid ProgressBar size: ${size}`)

  // Validate value
  let rightRadius;
  if(value >= 0 && value <= 99) rightRadius = 0;
  else if(value > 99 && value <= 100) rightRadius = 4;
  else throw new Error(`Invalid ProgressBar value: ${value}, value must be between 0 and 100`);

  console.log("CALC", Math.max(0,10* (value-99)/4))

  return (
    <OuterBar>
      <InnerBar value={value} />
      <VisuallyHidden>{"Progress bar is " + value + "% complete"}</VisuallyHidden>
    </OuterBar>
  )
};

const BaseProgressBar = styled.div`
  position: absolute;
  width: 370px;
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 8px;
`

const SmallProgressBar = styled(BaseProgressBar)`
  height: 8px;
`

const MediumProgressBar = styled(BaseProgressBar)`
  height: 12px;
`

const LargeProgressBar = styled(BaseProgressBar)`
  height: 24px;
  padding: 4px;
`

const InnerBar = styled.div`
  box-sizing: border-box;
  background: #4747EB;
  border-radius: 4px 0px 0px 4px;

  height: 100%;
  width: ${props => props.value}%;
  border-top-right-radius: ${props => Math.max(0, 4*(props.value-99))}px;
  border-bottom-right-radius: ${props => Math.max(0, 4*(props.value-99))}px;
`

export default ProgressBar;
