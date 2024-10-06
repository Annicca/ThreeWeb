import { FC, forwardRef, InputHTMLAttributes } from "preact/compat";
import classNames from "classnames";
import style from './InputControl.module.scss'


interface InputControlProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "max" | "min"> {
    label?: string,
    error?: string,
    classNameContainer?: string;
    max?: string | number;
    min?: string | number;
}

export const InputControl:FC<InputControlProps> = forwardRef<HTMLInputElement, InputControlProps>((props, ref)  => {
    
    const {label, error, classNameContainer, max, min, ...inputProps} = props
    
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
                max = {max}
                min = {min}
                {...inputProps} 
            />
            <label className={style.label} htmlFor={props.id || props.name}> {label}</label>
            <div className='error-text'>{error}</div>
        </div>
    )
})