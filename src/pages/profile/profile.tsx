import { ProfileUI } from '@ui-pages';
import { FC, SyntheticEvent, useEffect, useState } from 'react';
import { useSelector, useDispatch } from '../../services/hooks';
import {
  userSelector,
  updateUser,
  updateUserRequestSelector,
  updateUserErrorSelector
} from '../../services/slices/userSlice';

export const Profile: FC = () => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const updateUserRequest = useSelector(updateUserRequestSelector);
  const updateUserError = useSelector(updateUserErrorSelector);

  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    password: ''
  });

  // Заполняем форму при загрузке пользователя
  useEffect(() => {
    if (user) {
      setFormValue({
        name: user.name,
        email: user.email,
        password: ''
      });
    }
  }, [user]);

  // Проверяем, были ли изменены данные
  const isFormChanged =
    formValue.name !== user?.name ||
    formValue.email !== user?.email ||
    !!formValue.password;

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const data: Partial<{ name: string; email: string; password: string }> = {};
    if (formValue.name !== user?.name) data.name = formValue.name;
    if (formValue.email !== user?.email) data.email = formValue.email;
    if (formValue.password) data.password = formValue.password;

    if (Object.keys(data).length > 0) {
      dispatch(updateUser(data));
    }
  };

  const handleCancel = (e: SyntheticEvent) => {
    e.preventDefault();
    if (user) {
      setFormValue({
        name: user.name,
        email: user.email,
        password: ''
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <ProfileUI
      formValue={formValue}
      isFormChanged={isFormChanged}
      handleCancel={handleCancel}
      handleSubmit={handleSubmit}
      handleInputChange={handleInputChange}
      updateUserError={updateUserError ?? undefined}
    />
  );
};
