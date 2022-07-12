import styled, { keyframes } from 'styled-components';

interface IStyledLoaderProps {
  size: number;
  borderWidth: number;
}

const rotateAnimation = keyframes`
 from { transform: rotate(0deg); }
 to { transform: rotate(360deg); }
`;

export const OuterLoader = styled.div<IStyledLoaderProps>`
  align-items: center;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-name: ${rotateAnimation};
  animation-timing-function: ease-in-out;
  background-image: conic-gradient(from 66.04deg at 50% 50%, rgba(255, 255, 255, 0) 0deg, #ffffff 360deg);
  border-radius: 50%;
  display: flex;
  height: ${({ size }) => size}px;
  justify-content: center;
  width: ${({ size }) => size}px;
`;
export const InnerLoader = styled.div<IStyledLoaderProps>`
  background: transparent;
  border-radius: 50%;
  height: ${({ borderWidth, size }) => size - 2 * borderWidth}px;
  width: ${({ borderWidth, size }) => size - 2 * borderWidth}px;
`;
