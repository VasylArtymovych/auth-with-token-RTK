import { Form, Field } from 'formik';
import { Button } from '@mui/material';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import styled from 'styled-components';

export const LoginBtn = ({ children }) => {
  return (
    <Button
      startIcon={<VpnKeyIcon />}
      type="submit"
      variant="contained"
      color="secondary"
      size="medium"
      sx={{
        '&:hover': {
          backgroundColor: 'accent',
          boxShadow: 4,
        },
      }}
    >
      {children}
    </Button>
  );
};

export const LoginForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  padding: 20px;
  margin: 0 auto;
`;

export const Input = styled(Field)`
  position: relative;
  width: 90%;
  height: 35px;
  font-size: 22px;
  padding: ${({ theme }) => theme.space[2]}px;
  margin-bottom: ${({ theme }) => theme.space[4]}px;
  border: ${({ theme }) => theme.borders.bold('#560668')};
  border-radius: ${({ theme }) => theme.radii.normal};
  background: transparent;

  &::placeholder {
    color: ${({ theme }) => theme.colors.white};
  }
  &:hover,
  &:focus {
    width: 100%;
  }
`;

export const ErrorMsg = styled('div')`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 12px;
  margin-top: -${({ theme }) => theme.space[4]}px;
  margin-bottom: ${({ theme }) => theme.space[4]}px;
`;

export const AvatarText = styled('h3')`
  font-size: ${({ theme }) => theme.fontSizes.l}px;
  text-align: center;
`;
