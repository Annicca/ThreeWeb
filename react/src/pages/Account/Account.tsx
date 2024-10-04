import { FC } from "react";

import style from "./Account.module.scss";
import { Link } from "react-router-dom";

export const Account: FC = () => {
  return(
    <div className={style.wrapper}>
      <Link to={"/login"} className={style.btn}>
        Войти
      </Link>
      <Link to={"/signin"} className={style.btn}>
        Регистрация
      </Link>
    </div>
  );
};
