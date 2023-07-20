import { useForm } from 'react-hook-form';
import './Login.scss';
import { TextField, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { useAuthentication } from '../../hooks/useAuthentication';

export default function Login() {
  const navigate = useNavigate();
  const { isAuthenticated, login } = useAuthentication();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    // Get the input values (e.g., username and password)
    // Check if the username and password are valid
    if (data?.email === 'admin' && data?.password === 'pw') {
      // Create a fake authentication token
      login();
      navigate('/');
    } else {
      // Display an error message
      alert('Invalid username or password');
    }
    // Prevent the form from submitting and refreshing the page
    return false;
  };

  if (isAuthenticated) return <div>You are already logged in</div>;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='loginForm'>
      <Typography variant='h4' component='h4' className='header'>
        Login
      </Typography>
      <TextField
        className='inputField'
        variant='outlined'
        placeholder='email'
        defaultValue=''
        {...register('email')}
      />
      <TextField
        variant='outlined'
        placeholder='password'
        type='password'
        className='inputField'
        {...register('password', { required: true })}
      />
      {errors && <span>This field is required</span>}
      <Button className='submitButton' variant='contained' type='submit'>
        Submit
      </Button>
    </form>
  );
}
