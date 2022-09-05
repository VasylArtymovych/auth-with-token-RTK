import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, StyledHeader, StyledLink, Title } from './Header.styled';
import AuthNavigation from 'components/AuthNavigation';
import UserMenu from 'components/UserMenu';
import { authSelectors } from 'redux/auth';
import routesPath from 'routesPath';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

export default function Header() {
  const isLoggedIn = useSelector(authSelectors.getIsloggedIn);
  const location = useLocation();
  const isHomePath = location.pathname === '/';

  return (
    <>
      <StyledHeader as="header">
        <Container>
          <StyledLink to={routesPath.home}>
            <Title>
              <AutoStoriesIcon fontSize="large" />
              Contactsbook
            </Title>
          </StyledLink>
          {isHomePath && isLoggedIn && (
            <NavLink to={routesPath.contacts}>Back to ContactBook</NavLink>
          )}
          {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
        </Container>
      </StyledHeader>

      <Outlet />
    </>
  );
}
