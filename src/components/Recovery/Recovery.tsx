import { FC, useState, ChangeEvent, FormEvent, useEffect } from "react";
import { Input } from "../UI/Input";
import { Button } from "../UI/Button";
import { useNavigate } from "react-router-dom";
import { ErrorList } from "../Error/ErrorList";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { ROUTES } from "../../utils/routes/routes";

export const Recovery: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]);
  const navigate = useNavigate();
  const { resetPasswordStart, resetUserState } = useActions();
  const { resetPasswordSuccess, error } = useTypedSelector(state => state.user);

  useEffect(() => {
    if (resetPasswordSuccess) {
      setEmail("");
      resetUserState();
      navigate(ROUTES.LOGIN);
    }
  }, [resetPasswordSuccess, navigate, resetUserState]);

  useEffect(() => {
    if (Array.isArray(error) && error.length > 0) {
      setErrors(error);
    }
  }, [error]);

  const onSubmitForm = async (e: FormEvent) => {
    setErrors([]);
    e.preventDefault();

    resetPasswordStart({ email });
  };

  return (
    <form className="recovery" onSubmit={onSubmitForm}>
      <Input
        label="Email"
        name="email"
        placeholder="john@gmail.com"
        type="email"
        value={email}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
      />
      {errors.length > 0 && <ErrorList errors={errors} />}
      <Button className="recovery__button" type="submit">
        Recovery
      </Button>
    </form>
  );
};
