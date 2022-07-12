import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.m};
  gap: 0.4rem;
  justify-content: center;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.defaultText};
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 600;
  text-decoration: underline;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
