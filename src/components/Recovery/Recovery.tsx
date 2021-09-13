import { FC, useState, ChangeEvent, FormEvent } from 'react';
import { IRecoveryFields } from '../../utils/types/auth';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { auth } from '../../utils/firebase/utils';
import { useHistory } from 'react-router';
import ErrorList from '../Error/ErrorList/ErrorList';

const initialState: IRecoveryFields = {
  email: '',
  errors: [],
};

const Recovery: FC = () => {
  const [fields, setFields] = useState({ ...initialState });
  const history = useHistory();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target;
    setFields(prevState => ({ ...prevState, [name]: value }));
  };

  const onSubmitForm = async (e: FormEvent) => {
    setFields(prevState => ({ ...prevState, errors: [] }));
    e.preventDefault();
    const config = {
      url: 'http://localhost:3000/login',
    };

    try {
      await auth
        .sendPasswordResetEmail(fields.email, config)
        .then(result => {
          history.push('/login');
        })
        .catch(err => {
          setFields(prevState => ({ ...prevState, errors: [...prevState.errors, err.message] }));
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="recovery" onSubmit={onSubmitForm}>
      <Input
        label="Email"
        name="email"
        placeholder="john@gmail.com"
        type="email"
        value={fields.email}
        onChange={e => handleChange(e)}
      />
      {fields.errors.length > 0 && <ErrorList errors={fields.errors} />}
      <Button className="recovery__button" type="submit">
        Recovery
      </Button>
    </form>
  );
};

export default Recovery;
