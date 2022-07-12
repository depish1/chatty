import { StyledLogo } from 'components/SharedComponents/Logo/Logo.style';

interface ILogoProps {
  children: string;
}

const Logo = ({ children }: ILogoProps) => <StyledLogo>{children}</StyledLogo>;

export default Logo;
