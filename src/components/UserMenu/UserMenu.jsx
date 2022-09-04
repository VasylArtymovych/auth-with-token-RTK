import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { useLogOutMutation } from 'redux/auth/authAPI';
import avatar from '../../images/user-avatar.jpeg';

import LogoutIcon from '@mui/icons-material/Logout';
import { ImgWrap, Container, Button } from './UserMenu.styled';

export default function UserMenu() {
  const [userLogOut] = useLogOutMutation();
  const name = useSelector(authSelectors.getUserName);

  return (
    <Container>
      <ImgWrap>
        <img src={avatar} alt="avatar" />
      </ImgWrap>
      <span>Welcome, {name}</span>
      <Button type="button" onClick={userLogOut}>
        <LogoutIcon sx={{ color: 'white' }} />
      </Button>
    </Container>
  );
}
