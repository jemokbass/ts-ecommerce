import { FC, useState, ChangeEvent, FormEvent } from 'react';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import { IRegistrationFields } from '../../utils/types/auth';
import { auth, handleUserProfile } from '../../utils/firebase/utils';

const initialState: IRegistrationFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
  errors: [''],
};

const Registration: FC = () => {
  const [fields, setFields] = useState({ ...initialState });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target;
    setFields(prevState => ({ ...prevState, [name]: value }));
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = fields;

    if (password !== confirmPassword) {
      const err = ["Password don't match"];
      setFields(prevState => ({ ...prevState, errors: err }));
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      await handleUserProfile(user, { displayName });
      setFields(prevState => ({ ...prevState, ...initialState }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="registration" onSubmit={handleFormSubmit}>
      <Input
        label="Full Name"
        type="text"
        name="displayName"
        placeholder="John"
        value={fields.displayName}
        onChange={e => handleChange(e)}
      />
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
      <Input
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="da@3#zxe"
        value={fields.confirmPassword}
        onChange={e => handleChange(e)}
      />
      {fields.errors.length > 0 && (
        <ul className="registration__list">
          {fields.errors.map(err => (
            <li className="registration__item" key={err}>
              {err}
            </li>
          ))}
        </ul>
      )}
      <Button className="registration__button" type="submit">
        Sign Up
      </Button>
    </form>
  );
};

export default Registration;
