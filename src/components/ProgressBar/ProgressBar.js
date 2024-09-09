/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  if (size === 'large') {
    return <div style={{
        height: 24,
        borderRadius: 8,
        overflow: 'hidden',
        padding: '4px',
        backgroundColor: 'hsla(0, 0%, 50%, 0.15)',
        boxShadow: 'inset 0 2px 4px hsla(0, 0%, 50%, 0.35)'
    }}>
        <div style={{
            backgroundColor: 'hsla(0, 0%, 50%, 0.15)',
            borderRadius: '4px',
            overflow: 'hidden',
            width: '100%',
            height: '100%'
        }}>
            <div style={{
                backgroundColor: 'hsla(240, 80%, 60%, 1)',
                width: `${value}%`,
                height: '100%'
            }} />
        </div>
    </div>;
  } else if (size === 'medium') {
      return <div style={{
          height: 12,
          borderRadius: 4,
          overflow: 'hidden',
          backgroundColor: 'hsla(0, 0%, 50%, 0.15)', boxShadow: 'inset 0 2px 4px hsla(0, 0%, 50%, 0.35)'}}>
      <div style={{backgroundColor: 'hsla(240, 80%, 60%, 1)', width: `${value}%`, height: '100%'}} />
    </div>;
  }

  return <div style={{height: 8, borderRadius: 4, overflow: 'hidden', backgroundColor: 'hsla(0, 0%, 50%, 0.15)', boxShadow: 'inset 0 2px 4px hsla(0, 0%, 50%, 0.35)'}}>
    <div style={{backgroundColor: 'hsla(240, 80%, 60%, 1)', width: `${value}%`, height: '100%'}} />
  </div>;
};

export default ProgressBar;
