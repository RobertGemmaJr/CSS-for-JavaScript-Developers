import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

/** From Tutorial:
 * 
 *  https://github.com/css-for-js/mini-component-library/blob/solution/src/components/Select/Select.js
 *  I used the tutorial in order to work out how to use the native select dropdown but styles are my own
 *  I also used it to figure out how to detect focus/hover
 * 
 *  Should be width: max-content so you don't have to deal with inline-block elements
 *  Josh left strokeWidth at 1
 *  Icon used position: absolute to bring it out of flow
 *  The focus/outline color is the default color for the browsers, the JS stuff isn't necessary
 */

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  const isMacOS = navigator.userAgent.indexOf('Mac OS X') > -1;
  const isChrome = navigator.userAgent.indexOf("Chrome") > -1;

  return (
    <Wrapper focusColor={isMacOS && isChrome ? "#4374CB" : COLORS.primary}>
      <NativeSelect label={label} value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <SelectStyles focusColor={isMacOS && isChrome ? "#4374CB" : COLORS.primary}>
        {displayedValue}
        <StyledIcon  
          id="chevron-down" 
          size="16" 
          strokeWidth={2} 
        />
      </SelectStyles>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  isolation: isolate;
`

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0; // Makes NativeSelect invisible
`

const SelectStyles = styled.div`
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  padding: 12px 16px;
  border-radius: 8px;

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
  
  ${NativeSelect}:focus + & {
    outline: 2px solid ${props => props.focusColor};
    border-radius: 3px;
  }
`

const StyledIcon = styled(Icon)`
  display: inline-block;
  margin-left: 24px;
`

export default Select;
