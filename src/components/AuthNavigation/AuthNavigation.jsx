import { StyledLink, LinkWraper } from './AuthNavigation.styled';

export default function AuthNavigation() {
  return (
    <LinkWraper>
      <StyledLink to="login">Log in</StyledLink>
      <StyledLink to="register">Sign Up</StyledLink>
    </LinkWraper>
  );
}
