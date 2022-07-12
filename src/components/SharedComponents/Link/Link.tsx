import { Description, StyledLink, Wrapper } from 'components/SharedComponents/Link/Link.style';

interface ILinkProps {
  linkText: string;
  target: string;
  description?: string;
}

const Link = ({ linkText, target, description }: ILinkProps) => (
  <Wrapper>
    {description && <Description>{description}</Description>}
    <StyledLink to={target}>{linkText}</StyledLink>
  </Wrapper>
);

export default Link;
