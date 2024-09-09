import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
    const [isOpen, setIsOpen] = React.useState(false);
    const someRef = React.useRef();

    return (
      <div style={{position: 'relative'}}>
          <Button onClick={() => {
              someRef.current.showPicker();
              setIsOpen(true);
          }}>
              {displayedValue} <Icon id="chevron-down" size={12} style={{verticalAlign: 'middle', display: 'inline-block'}}/>
          </Button>
          <select ref={someRef} value={value} onChange={onChange}
                  onBlur={() => {
                      console.log('onBlur');
                      setIsOpen(false);
                  }}
                  style={{visibility: 'hidden', position: 'absolute', left: 0, top: 0}}>
              {children}
          </select>
      </div>
  );
};

const Button = styled.button`
    border-radius: 8px;
    border: 2px transparent;
    padding: 12px 16px;
    background-color: ${COLORS.transparentGray15};
    color: ${COLORS.gray700};
    :hover {
        color: ${COLORS.black};
    };
`;

export default Select;
