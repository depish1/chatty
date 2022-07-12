import styled from 'styled-components';

export const StyledLogo = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  text-align: center;
`;
