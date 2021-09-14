import { FC, FormEvent, useState, ChangeEvent } from 'react';
import { signInWithGoogle, auth } from '../../utils/firebase/utils.firebase';

import Button from '../../components/UI/Button/Button';
import { ILoginFields } from '../../utils/types/user.types';
import Input from '../UI/Input/Input';
import { Link } from 'react-router-dom';

const initialState: ILoginFields = {
  email: '',
  password: '',
};

const Login: FC = () => {
  const [fields, setFields] = useState({ ...initialState });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target;
    setFields(prevState => ({ ...prevState, [name]: value }));
  };

  const onSubmitForm = async (event: FormEvent) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(fields.email, fields.password);
      setFields(prevState => ({ ...prevState, ...initialState }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="login" onSubmit={onSubmitForm}>
      <Link className="login__link" to="/recovery">
        Forgot Password?
      </Link>
      <Input
        label="Email"
        type="email"
        name="email"
        placeholder="john@gmail.com"
        value={fields.email}
        onChange={e => handleChange(e)}
      />
      <Input
        label="Password"
        type="password"
        name="password"
        placeholder="da@3#zxe"
        value={fields.password}
        onChange={e => handleChange(e)}
      />
      <Button className="login__button" type="submit">
        Log In
      </Button>
      <Button className="login__button" onClick={signInWithGoogle} type="button">
        Sign In with Google
      </Button>
    </form>
  );
};

export default Login;
