import { FC } from "preact/compat";
import { AuthTitle } from "src/uikit/authTitle/AuthTitle";
import { useForm } from "react-hook-form";
import { InputControl } from "src/uikit/input/InputControl";
import { Button } from "src/uikit/button/Button";
import { LinkToMain } from "src/uikit/linkToMain/LinkToMain";

import style from "./Login.module.scss";

interface ILoginRequest {
  login: string;
  password: string;
}

export const Login: FC = () => {

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<ILoginRequest>({
    mode: "onBlur",
  });

  const onSubmit = handleSubmit(async (data: ILoginRequest) => {
    console.log(data)
  });

  return (
    <div className={style.container}>
      <LinkToMain />
      <form className={style.form} onSubmit={onSubmit}>
        <AuthTitle
          title={"Вход"}
          linkText={"Ещё не зарегистрировались?"}
          path={"/signin"}
        />
        <InputControl
          error={errors.login && errors.login.message}
          label="Логин"
          placeholder="Логин"
          type="text"
          {...register("login", {
            required: "Поле обязательно",
            minLength: { value: 5, message: "Длина не менее 5 символов" },
            pattern: {
              value: /^[A-Za-z0-9]+$/,
              message:
                "Логин должен содержать только буквы латинского алфавита и цифры",
            },
          })}
        />
        <InputControl
          type="password"
          placeholder="Пароль"
          label="Пароль"
          {...register("password", {
            required: "Поле обязательно",
            minLength: { value: 8, message: "Длина не менее 8 символов" },
            validate: {
              hasNumber: (value) =>
                /[0-9]/.test(value) || "Пароль должен содержать цифры",
              hasLetter: (value) =>
                /[A-Za-z]/.test(value) ||
                "Пароль должен содержать буквы латинского алфавита",
              hasSpecial: (value) =>
                /[!@#$%^&*]/.test(value) ||
                "Пароль должен содержать хотя бы 1 спецсимвол",
            },
          })}
          error={errors.password && errors.password.message}
        />
        <Button type="submit" disabled = {!isValid} >Войти</Button>
      </form>
    </div>
  );
};
