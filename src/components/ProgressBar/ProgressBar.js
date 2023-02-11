/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {

  return <div style={{height: 24, borderRadius: 8, overflow: 'hidden', border: '4px solid hsla(0, 0%, 50%, 0.15)'}}>
    <div style={{backgroundColor: 'hsla(240, 80%, 60%, 1)', width: `${value}%`, height: '100%'}} />
  </div>;
};

export default ProgressBar;
