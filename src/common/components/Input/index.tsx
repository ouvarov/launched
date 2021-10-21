import React, { useState } from 'react';
import classNames from 'classnames';

type InputPropsType = {
    id: string;
    name: string;
    label?: string;
    value?: string;
    placeholder?: string;
    hasError?: string;
    type?: 'text' | 'email' | 'password';
    className?: string;
    onFocus?: (e: React.SyntheticEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.SyntheticEvent<HTMLInputElement>) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputPropsType> = ({
    type = 'text',
    id,
    name,
    hasError = '',
    value = '',
    placeholder = '',
    className = '',
    label = '',
    onFocus,
    onBlur,
    onChange,
}) => {
    const [inputType, setInputType] = useState<string>(type);

    const isPasswordType = type === 'password';

    const handleOnClickShowPassword = (): void => {
        if (inputType === 'password') {
            setInputType('text');
        } else {
            setInputType('password');
        }
    };

    return (
        <div
            className={classNames(`input ${className}`, {
                'input--error': !!hasError,
                'input--password': isPasswordType,
            })}
        >
            {/* eslint-disable-next-line jsx-a11y/label-has-for */}
            <label className="label" htmlFor={id}>
                {label}
            </label>
            <div className="input__control-wrap">
                <input
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={onChange}
                    type={inputType}
                    id={id}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    className="input__control"
                    autoComplete="on"
                />
                {isPasswordType && (
                    <button type="button" className="input__show-password" onClick={handleOnClickShowPassword} />
                )}
            </div>
            {!!hasError && <div className="input__error">{hasError}</div>}
        </div>
    );
};

export default Input;
