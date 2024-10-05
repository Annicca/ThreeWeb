import { FC, InputHTMLAttributes, forwardRef } from "react";
import classNames from "classnames";
import style from './InputControl.module.scss'

interface InputControlProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string,
    error?: string,
    classNameContainer?: string;
}

export const InputControl:FC<InputControlProps> = forwardRef<HTMLInputElement, InputControlProps>((props, ref)  => {
    
    const {label, error, classNameContainer, ...inputProps} = props
    
    return(
        <div className={classNames(
            classNameContainer,
            style.inputContainer
        )}>
            <input
                className={classNames(
                    props.className,
                    style.input
                )} 
                ref={ref}
                {...inputProps} 
            />
            <label className={style.label} htmlFor={props.id || props.name}> {label}</label>
            <div className='error-text'>{error}</div>
        </div>
    )
})
