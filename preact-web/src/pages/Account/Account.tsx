import { FC } from "preact/compat";
import style from "./Account.module.scss";

export const Account: FC = () => {
  return(
    <div className={style.wrapper}>
      <a href="/login" className={style.btn}>
        Войти
      </a>
      <a href="/signin" className={style.btn}>
        Регистрация
      </a>
    </div>
  );
};
