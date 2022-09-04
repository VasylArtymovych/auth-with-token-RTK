import { Container, HomeTitle, HomeText } from './HomePage.styled';
import Confetti from 'components/Confetti';

export default function HomePage() {
  return (
    <>
      {Confetti()}
      <Container>
        <HomeTitle>Welcome to ContactsBook</HomeTitle>
        <HomeText>Before use your own ContactsBook: SignUp or LogIn</HomeText>
      </Container>
    </>
  );
}
