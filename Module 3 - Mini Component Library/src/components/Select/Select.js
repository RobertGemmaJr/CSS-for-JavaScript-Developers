import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from "../VisuallyHidden"
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  const isMacOS = navigator.userAgent.indexOf('Mac OS X') > -1;
  const isChrome = navigator.userAgent.indexOf("Chrome") > -1;

  return (
    <Wrapper focusColor={isMacOS && isChrome ? "#4374CB" : COLORS.primary}>
      <Text>
        {displayedValue}
        <StyledIcon  
          id="chevron-down" 
          size="12" 
          strokeWidth={2} 
        />
      </Text>
      
      <VisuallyHidden> 
        <select label={label} value={value} onChange={onChange} />
      </VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${COLORS.transparentGray15};
  border-radius: 8px;

  display: inline-block;
  padding: 16px 12px;
  color: ${COLORS.gray700};

  &:focus {
    border: 2px solid ${props => props.focusColor};
    border-radius: 3px;
  }

  &:hover {
    color: ${COLORS.black};
  }
`

const Text = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
`

const StyledIcon = styled(Icon)`
  display: inline-block;
  margin-left: 24px;
`

export default Select;
