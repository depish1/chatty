import { ButtonHTMLAttributes } from 'react';

import { StyledButton } from 'components/SharedComponents/Button/Button.style';
import Loader from 'components/SharedComponents//Loader/Loader';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  fullWidth?: boolean;
  content: string | JSX.Element;
}

const Button = ({ fullWidth = false, content, isLoading, ...rest }: IButtonProps) => (
  <StyledButton fullWidth={fullWidth} {...rest}>
    {isLoading ? <Loader borderWidth={2} size={16} /> : content}
  </StyledButton>
);

export default Button;
