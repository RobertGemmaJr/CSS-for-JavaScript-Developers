import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

/** From Tutorial:
 *  https://github.com/css-for-js/mini-component-library/tree/solution
 * 
 * BaseProgressBar should have a set width - let user handle that 
 * Add "role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100"" to <OuterBar>
 *  Use overflow: hidden to match the inner and outer border-radius
 *    To work with large: put border-radius and overflow in a secondary wrapper element
 *  You can use a different outer border-radius to make sure large's padding is the same through the curved edge
 */

const ProgressBar = ({ value, size }) => {
  let OuterBar;
  if(size === "small") OuterBar = SmallProgressBar;
  else if(size === "medium") OuterBar = MediumProgressBar;
  else if(size === "large") OuterBar = LargeProgressBar;
  else throw new Error(`Invalid ProgressBar size: ${size}`)

  if(!value || value < 0 || value > 100) 
    throw new Error(`Invalid ProgressBar value: ${value}, value must be between 0 and 100`);

  return (
    <OuterBar>
      <InnerBar value={value} />
      <VisuallyHidden>{value}</VisuallyHidden>
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
  background: #4747EB;
  border-radius: 4px 0px 0px 4px;

  box-sizing: border-box;
  height: 100%;
  width: ${props => props.value}%;
  border-top-right-radius: ${props => Math.max(0, 2*(props.value-98))}px;
  border-bottom-right-radius: ${props => Math.max(0, 2*(props.value-98))}px;
`

export default ProgressBar;