import styled from 'styled-components';

interface IButtonProps {
  fullWidth: boolean;
}

export const StyledButton = styled.button<IButtonProps>`
  align-items: center;
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.element};
  color: ${({ theme }) => theme.colors.whiteText};
  cursor: pointer;
  display: flex;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: 500;
  outline: none;
  padding: 1rem 2rem;
  transition: background 0.3s ease-in;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'max-content')};

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;
