import { useSelector } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { authSelectors } from 'redux/auth';
import {
  LoginBtn,
  LoginForm,
  Input,
  ErrorMsg,
  AvatarText,
} from './LoginPage.styled';
import Spiner from 'components/Spinner';
import { Box } from 'components/Box/Box';
import { useLoginMutation } from 'redux/auth/authAPI';

let loginSchema = yup.object().shape({
  email: yup.string().email(),
  password: yup
    .string('Enter your password')
    .min(6, 'Password should be of minimum 6 characters length')
    .required('Password is required'),
});

export default function LoginPage() {
  const [userLogin] = useLoginMutation();

  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  );
  console.log(isFetchingCurrentUser);
  const handleSubmit = (value, { resetForm }) => {
    userLogin(value);

    resetForm();
  };

  return (
    <>
      {isFetchingCurrentUser ? (
        <Box display="flex" justifyContent="center" mt="120px">
          {Spiner.customSpinner}
        </Box>
      ) : (
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={handleSubmit}
          validationSchema={loginSchema}
        >
          <LoginForm>
            <div>
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <AvatarText>LogIn</AvatarText>
            </div>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
            ></Input>
            <ErrorMessage name="email">
              {msg => <ErrorMsg>{msg}</ErrorMsg>}
            </ErrorMessage>
            <Input
              type="password"
              name="password"
              placeholder="password"
            ></Input>
            <ErrorMessage name="password">
              {msg => <ErrorMsg>{msg}</ErrorMsg>}
            </ErrorMessage>
            <LoginBtn>LogIn</LoginBtn>
          </LoginForm>
        </Formik>
      )}
    </>
  );
}
