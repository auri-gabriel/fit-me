import React, {FC} from 'react';
import styled, {keyframes} from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

interface SpinnerProps {
  size?: string;
  color?: string;
  borderWidth?: string;
}

const SpinnerWrapper = styled.div<SpinnerProps>`
  display: inline-block;
  width: ${(props) => (props.size ? props.size : '16px')};
  height: ${(props) => (props.size ? props.size : '16px')};
  border: ${(props) =>
  props.borderWidth
    ? `${props.borderWidth} solid rgba(0, 0, 0, 0.1)`
    : '4px solid rgba(0, 0, 0, 0.1)'};
  border-top-color: ${(props) => (props.color ? props.color : '#333')};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  `;

const Spinner: FC<SpinnerProps> = ({size, color, borderWidth}) => {
  return <SpinnerWrapper size={size} color={color} borderWidth={borderWidth} />;
};

export default Spinner;

