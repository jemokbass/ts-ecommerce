import { FC, useState, ChangeEvent } from 'react';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import { IRegistrationFields } from '../../utils/types/auth';

const initialState: IRegistrationFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Registration: FC = () => {
  const [fields, setFields] = useState({ ...initialState });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target;
    setFields(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <form className="registration">
      <Input
        label="Full Name"
        type="text"
        name="displayName"
        placeholder="John"
        value={fields.displayName}
        onChange={e => handleChange(e)}
      />
      <Input
        label="E-mail"
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
      <Input
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="da@3#zxe"
        value={fields.confirmPassword}
        onChange={e => handleChange(e)}
      />
      <Button className="registration__button" type="submit">
        Sign Up
      </Button>
    </form>
  );
};

export default Registration;
