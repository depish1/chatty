import styled from 'styled-components';

interface IFormInputProps {
  isError: boolean;
}

export const Label = styled.span`
  color: ${({ theme }) => theme.colors.defaultText};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: 500;
`;

export const Input = styled.input<IFormInputProps>`
  background: ${({ theme }) => theme.colors.fieldBackground};
  border: 1px solid ${({ theme, isError }) => (isError ? theme.colors.errorText : theme.colors.defaultBorder)};
  border-radius: ${({ theme }) => theme.borderRadius.element};
  font-size: ${({ theme }) => theme.fontSizes.s};
  outline: none;
  padding: 0.7rem;
  transition: border 0.3s ease-in;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.secondary};
  }
`;

export const Wrapper = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
