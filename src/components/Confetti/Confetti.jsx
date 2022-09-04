import Confetti from 'react-confetti';

export default function CreateConfetti() {
  return (
    <Confetti
      width={window.innerWidth || 300}
      height={window.innerHeight || 200}
    />
  );
}
