import { useForm } from 'react-hook-form';
import './Login.scss';
import { TextField, Button } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='loginForm'>
      <Typography variant='h4' component='h4'>
        Login
      </Typography>
      <TextField variant='outlined' placeholder="email" defaultValue='' {...register('email')} />
      <TextField
        variant='outlined'
        placeholder='password'
        type='password'
        {...register('password', { required: true })}
      />
      {errors && <span>This field is required</span>}
      <Button variant="contained" type='submit'>Submit</Button>
    </form>
  );
}
