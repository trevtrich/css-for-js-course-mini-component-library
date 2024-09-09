import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZE = {
    small: {height: 24, imageSize: 16, fontSize: 14, borderThickness: 1},
    large: {height: 36, imageSize: 24, fontSize: 18, borderThickness: 2},
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return <Wrapper style={{'--borderThickness': `${SIZE[size].borderThickness}px`, '--width': `${width}px`}}>
      <form>
          <Icon id={icon} size={SIZE[size].imageSize} style={{display: 'inline-block', paddingRight: '0.5', position: 'absolute', top: 0, bottom: 0, margin: 'auto', '--size': `${SIZE[size].imageSize}px`}}/>
          <VisuallyHidden><Label htmlFor="text-input">Would you like to enter some text?</Label></VisuallyHidden>
          <Input id="text-input" type="text" placeholder={placeholder} style={{'--height': `${SIZE[size].height}px`, '--imageSpacer': `${SIZE[size].imageSize + 8}px`, '--fontSize': `${SIZE[size].fontSize}px`}} />
      </form>
  </Wrapper>;
};

const Input = styled.input`
    width: 100%;
    height: var(--height);
    padding-left: var(--imageSpacer);
    font-size: var(--fontSize);
    font-weight: 700;
    border: none;
    ::placeholder {
        font-weight: 400;
    }
    color: ${COLORS.gray700};
    :hover {
        color: ${COLORS.black};
    }
`;

const Label = styled.label`
`;

const Wrapper = styled.div`
    width: var(--width);
    position: relative;
    border-bottom: solid ${COLORS.black};
    border-bottom-width: var(--borderThickness);
`;

export default IconInput;
