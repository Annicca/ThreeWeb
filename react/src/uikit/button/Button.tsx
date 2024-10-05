import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import classNames from "classnames";

import style from "./Button.module.scss";

interface ButtonProps
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  isClear?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  isClear = false,
  ...props
}) => {
  return (
    <button
      {...props}
      className={classNames(
        {
          [style.yellow] : !isClear
        },
        [className]
      )}
    >
      {children}
    </button>
  );
};
