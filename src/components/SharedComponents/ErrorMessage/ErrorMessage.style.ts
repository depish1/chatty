import styled from 'styled-components';

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.errorText};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: 600;
`;
