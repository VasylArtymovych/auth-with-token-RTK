import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  RegForm,
  RegInput,
  RegBtn,
  ErrorMsg,
  AvatarText,
} from './RegisterPage.styled';
import { useRegisterMutation } from 'redux/auth/authAPI';

let loginSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email(),
  password: yup
    .string('Enter your password')
    .min(6, 'Password should be of minimum 6 characters length')
    .required('Password is required'),
});

export default function RegisterPage() {
  const [registerUser] = useRegisterMutation();

  const handleSubmit = (value, { resetForm }) => {
    registerUser(value);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={handleSubmit}
      validationSchema={loginSchema}
    >
      <RegForm>
        <div>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <AvatarText>SignUp</AvatarText>
        </div>
        <RegInput
          type="text"
          name="name"
          placeholder="Enter your name"
        ></RegInput>
        <ErrorMessage name="name">
          {msg => <ErrorMsg>{msg}</ErrorMsg>}
        </ErrorMessage>
        <RegInput
          type="email"
          name="email"
          placeholder="Enter your email"
        ></RegInput>
        <ErrorMessage name="email">
          {msg => <ErrorMsg>{msg}</ErrorMsg>}
        </ErrorMessage>
        <RegInput
          type="password"
          name="password"
          placeholder="password"
        ></RegInput>
        <ErrorMessage name="password">
          {msg => <ErrorMsg>{msg}</ErrorMsg>}
        </ErrorMessage>
        <RegBtn>SignUp</RegBtn>
      </RegForm>
    </Formik>
  );
}
